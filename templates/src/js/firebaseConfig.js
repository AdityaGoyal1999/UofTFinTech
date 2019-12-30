$(function() {
    var firebaseConfig = {
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

    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
    });

    var uiConfig = {
        signInSuccessUrl: 'User.html',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            //firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: 'login.html',
        // Privacy policy url/callback.
        privacyPolicyUrl: function () {
            window.location.assign('login.html');
        },
        signInFlow: "popup"
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
});