import { auth } from "./firebase-config.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const ADMIN_EMAIL = "admin@test.com";
const KITCHEN_EMAIL = "kitchen@test.com";

onAuthStateChanged(auth, (user) => {

    const path = window.location.pathname;
const page = path.split("/").pop().replace(".html", "");

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    // Protection Admin
    if (page === "admin") {

        if (user.email !== ADMIN_EMAIL) {

            alert("Accès réservé à l'administrateur.");

            signOut(auth);

            return;
        }

    }

    // Protection Cuisine
    if (page === "kitchen") {

        if (user.email !== KITCHEN_EMAIL) {

            alert("Accès réservé à la cuisine.");

            signOut(auth);

            return;
        }

    }

});
