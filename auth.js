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


    // =====================================================
    // PAS CONNECTÉ
    // =====================================================

    if (!user) {

        if (
            page !== "login"
        ) {

            window.location.href = "login.html";

        }

        return;
    }


    // =====================================================
    // ADMIN
    // =====================================================

    if (page === "admin") {

        if (user.email !== ADMIN_EMAIL) {

            alert(
                "Accès réservé à l'administrateur."
            );

            // IMPORTANT :
            // On NE fait PAS signOut(auth)
            //
            // On garde la connexion Firebase
            // pour que Kitchen reste connecté.

            window.location.href =
                "kitchen.html";

            return;
        }

    }


    // =====================================================
    // KITCHEN
    // =====================================================

    if (page === "kitchen") {

        if (user.email !== KITCHEN_EMAIL) {

            alert(
                "Accès réservé à la cuisine."
            );

            // IMPORTANT :
            // On NE fait PAS signOut(auth)

            window.location.href =
                "admin.html";

            return;
        }

    }

});
