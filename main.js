import { firebaseConfig } from "./firebaseConfig.js";

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
