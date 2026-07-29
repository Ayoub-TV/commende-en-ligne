import { app } from "./firebase-config.js";

import {
    getAuth,
    setPersistence,
    browserSessionPersistence,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const auth = getAuth(app);

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document
        .getElementById("email")
        .value
        .trim()
        .toLowerCase();

    const password = document.getElementById("password").value;

    error.textContent = "";

    try {

        // Une session indépendante pour cet onglet
        await setPersistence(
            auth,
            browserSessionPersistence
        );

        // Connexion
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        // Redirection
        if (email === "admin@test.com") {

            window.location.href = "admin.html";

        } else if (email === "kitchen@test.com") {

            window.location.href = "kitchen.html";

        } else {

            error.textContent =
                "Ce compte n'a pas accès à cette application.";
        }

    } catch (err) {

        console.error(err);

        error.textContent =
            "Email ou mot de passe incorrect.";
    }

});
