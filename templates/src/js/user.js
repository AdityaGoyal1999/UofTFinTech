
    initializeFirebaseApp();

    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        if (user) {
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
        } else {
            // User is signed out.
            // ...
        }
    });

function initializeFirebaseApp()
{
    var firebaseConfig = {
        apiKey: "AIzaSyBhn1G5-Zk08AZ435rUMIkeXmf1upKcmeI",
        authDomain: "kabootar-74acc.firebaseapp.com",
        databaseURL: "https://kabootar-74acc.firebaseio.com",
        projectId: "kabootar-74acc",
        storageBucket: "kabootar-74acc.appspot.com",
        messagingSenderId: "255478711946",
        appId: "1:255478711946:web:6a805b498fc103aea14f73",
        measurementId: "G-MPJ82G8EVZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}