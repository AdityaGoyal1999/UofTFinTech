function initializeFirebaseApp()
{
    let firebaseConfig = {
        apiKey: "AIzaSyCCRMtDs_u5jd9Pph2cIa7O2Af8MPtOjnY",
        authDomain: "uoftfint.firebaseapp.com",
        databaseURL: "https://uoftfint.firebaseio.com",
        projectId: "uoftfint",
        storageBucket: "uoftfint.appspot.com",
        messagingSenderId: "284130133968",
        appId: "1:284130133968:web:0c9b353bf4a26bfb941bd5",
        measurementId: "G-8PZR1XMMQV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}
