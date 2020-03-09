function initializeFirebaseApp() {
    initializeFirebaseWithCallback(function(user){});
}

function initializeFirebaseWithCallback(callback){
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
    // TODO: This error is coming which removes the authentication box.
    // const messaging = firebase.messaging();
    // messaging.requestPermission()
    //     .then(function(){
    //         console.log("Permission given");
    //         return messsaging.getToken();
    //     })
    //     .catch(function(err){
    //         console.log("Permission not given");
    //     })

    let auth = firebase.auth();
    let db = firebase.firestore();

    auth.onAuthStateChanged(function(user){
        if(user){
            if(!user.emailVerified && !window.location.href.endsWith("verificationError.php")) {
                window.location.replace("verificationError.php");
            }else{
                let userRef = db.collection("users").doc(user.uid);
                userRef.get().then(function(doc){
                    if(!doc.exists && !window.location.href.endsWith("newUser.php")){
                        window.location.replace("newUser.php");
                    }else if(doc.exists){
                        callback(user);
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
            }
        }else{
            if(!window.location.href.endsWith("index.php")){
                window.location.replace("index.php");
            }
        }
    });
}
