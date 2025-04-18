// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAz6TBilFlMKzMUEdWr0F29mPZ3daXbwOo",
authDomain: "stockflow-b1041.firebaseapp.com",
projectId: "stockflow-b1041",
storageBucket: "stockflow-b1041.firebasestorage.app",
messagingSenderId: "475527348194",
appId: "1:475527348194:web:7b03db5f4e51ea3c0643bb",
measurementId: "G-RGJCVH9CP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
