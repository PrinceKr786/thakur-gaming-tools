import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDcfBPjecrZW0Cdnl2HO_w1rQn8DXtCdHU",
    authDomain: "thakur-gaming-tools.firebaseapp.com",
    databaseURL: "https://thakur-gaming-tools-default-rtdb.firebaseio.com",
    projectId: "thakur-gaming-tools",
    storageBucket: "thakur-gaming-tools.firebasestorage.app",
    messagingSenderId: "817792339694",
    appId: "1:817792339694:web:982c276f9238df3f266dff",
    measurementId: "G-DPMLF5PY42"
};

const app = initializeApp(firebaseConfig);

let analytics = null;
try {
    analytics = getAnalytics(app);
} catch (e) {
    analytics = null;
}

const db = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
