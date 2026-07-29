import { auth } from "./firebase-config.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const ADMIN_EMAIL = "admin@test.com";
const KITCHEN_EMAIL = "kitchen@test.com";

onAuthStateChanged(auth, (user) => {

    const path = window.location.pathname;

    const page = path
        .split("/")
        .pop()
        .replace(".html", "");

    // ==========================================
    // PAS CONNECTÉ
    // ==========================================

    if (!user) {

        if (
            page !== "login" &&
            page !== ""
        ) {
            window.location.href = "login.html";
        }

        return;
    }


    // ==========================================
    // PAGE ADMIN
    // ==========================================

    if (page === "admin") {

        if (user.email !== ADMIN_EMAIL) {

            alert(
                "Accès réservé à l'administrateur."
            );

            // NE PAS faire signOut()
            // On ne détruit pas la session.

            window.location.href = "login.html";

            return;
        }
    }


    // ==========================================
    // PAGE KITCHEN
    // ==========================================

    if (page === "kitchen") {

        if (user.email !== KITCHEN_EMAIL) {

            alert(
                "Accès réservé à la cuisine."
            );

            // NE PAS faire signOut()

            window.location.href = "login.html";

            return;
        }
    }

});
