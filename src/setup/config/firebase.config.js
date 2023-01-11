const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAET9nyNsU_kTbuG5jMFFJxAn3S2XuXU2o",
    authDomain: "pixel-war-esd-thomas.firebaseapp.com",
    projectId: "pixel-war-esd-thomas",
    storageBucket: "pixel-war-esd-thomas.appspot.com",
    messagingSenderId: "735644169756",
    appId: "1:735644169756:web:7c80c4445272d1545a51d9"
};

const firebaseApp = initializeApp(firebaseConfig);

const firestoreDb = getFirestore(firebaseApp);

module.exports = { firestoreDb };