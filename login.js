import { app } from "./firebase-config.js";

import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const auth = getAuth(app);

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(auth, email, password);

        if (email === "admin@test.com") {

            location.href = "admin.html";
            location.href = "admin";

        } else if (email === "kitchen@test.com") {

            location.href = "kitchen.html";
            location.href = "kitchen";

        }

    } catch (err) {

        error.textContent = "Email ou mot de passe incorrect.";

    }

});
