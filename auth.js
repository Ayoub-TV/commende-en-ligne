import { app } from "./firebase-config.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const auth = getAuth(app);

const ADMIN_EMAIL = "admin@brimo.ma";
const KITCHEN_EMAIL = "kitchen@brimo.ma";

onAuthStateChanged(auth, (user) => {

    const page = window.location.pathname.split("/").pop();

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    // Protection Admin
    if (page === "admin.html") {

        if (user.email !== ADMIN_EMAIL) {

            alert("Accès réservé à l'administrateur.");

            auth.signOut();

            return;
        }

    }

    // Protection Cuisine
    if (page === "kitchen.html") {

        if (user.email !== KITCHEN_EMAIL) {

            alert("Accès réservé à la cuisine.");

            auth.signOut();

            return;
        }

    }

});
