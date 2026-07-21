import { auth } from "./firebase-config.js";

import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    setPersistence,
    browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// Session uniquement tant que le navigateur est ouvert
setPersistence(auth, browserSessionPersistence);

// ==========================
// PAGE LOGIN
// ==========================
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const error = document.getElementById("error");

        error.textContent = "";

        try {

            await signInWithEmailAndPassword(auth, email, password);

            const redirect =
                sessionStorage.getItem("redirectAfterLogin") ||
                "admin.html";

            sessionStorage.removeItem("redirectAfterLogin");

            location.href = redirect;

        } catch (err) {

            error.textContent = "Email ou mot de passe incorrect.";

        }

    });

}

// ==========================
// PROTECTION DES PAGES
// ==========================

const page = location.pathname.split("/").pop();

if (page === "admin.html" || page === "kitchen.html") {

    onAuthStateChanged(auth, (user) => {

        if (!user) {

            sessionStorage.setItem("redirectAfterLogin", page);

            location.href = "login.html";

        }

    });

}
