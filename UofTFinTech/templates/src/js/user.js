// function initUserAuth(data){

    // var firebaseConfig = {
    //     apiKey: "AIzaSyBhn1G5-Zk08AZ435rUMIkeXmf1upKcmeI",
    //     authDomain: "kabootar-74acc.firebaseapp.com",
    //     databaseURL: "https://kabootar-74acc.firebaseio.com",
    //     projectId: "kabootar-74acc",
    //     storageBucket: "kabootar-74acc.appspot.com",
    //     messagingSenderId: "255478711946",
    //     appId: "1:255478711946:web:6a805b498fc103aea14f73",
    //     measurementId: "G-MPJ82G8EVZ"
    // };
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    //
    // const auth = firebase.auth();
    // const db = firebase.firestore();
    //
    // const txtEmail = document.getElementById("txtLogin");
    // const txtPaswd = document.getElementById("txtPassword");
    // const LoginBtn = document.getElementById("LogInBtn");
    // const SignupBtn = document.getElementById("SignUpBtn");
    //
    // LoginBtn.addEventListener('click', e =>{
    //
    //     const email = txtEmail.value;
    //     const pass = txtPaswd.value;
    //     const auth = firebase.auth();
    //
    //     const promise = auth.signInWithEmailAndPassword(email, pass);
    //
    //     promise.catch(e => console.log(e.message()));
    // });
    //
    // SignupBtn.addEventListener('click', e => {
    //
    //     const email = txtEmail.value;
    //     const pass = txtPaswd.value;
    //     const auth = firebase.auth();
    //
    //     const promise = auth.createUserWithEmailAndPassword(email, pass);
    //
    //     promise.catch(e => console.log(e.message()));
    //
    // });
    //
    // firebase.auth().onAuthStateChanged(firebaseUser =>{
    //     if(firebaseUser){
    //         console.log(firebaseUser);
    //     }
    //     else{
    //         console.log("Not logged in")
    //     }
    //
    // });

//     data.provider = new firebase.auth.GoogleAuthProvider();
//
//     $("#firebaseTest").off('click').on('click', function () {
//         if(data.loggingIn)
//             return;
//         googleSignIn(data);
//     });
//
//     firebase.auth().onAuthStateChanged(function (firebaseUser) {
//         if(firebaseUser) {
//             data.user = firebaseUser;
//             showUser(data);
//             fixUI();
//             if(!data.disconnected) {
//                 data.loggingIn = true;
//             }
//         }else{
//             // Update the sign-in button to Google sign-in button
//             data.user = null;
//             data.loggingIn = false;
//
//             $("#firebaseTest").off('click').on('click', function () {
//                 if(data.loggingIn){return;}
//                 googleSignIn(data);
//             });
//             //$("#firebaseTest").html("<img src=\"assets/google/btn_google_signin_dark_normal_web@2x.png\" width=\"191\" />");
//             fixUI();
//         }
//     });
// }
//
// function showUser(data){
//     $("#userHolder").html("<div class=\"media\">\n" +
//         "  <img style=\"width:64px\" src=\"" + data.user.photoURL + "\" class=\"mr-3\" alt=\"...\">\n" +
//         "  <div class=\"media-body\">\n" +
//         "    <h5 class=\"mt-0\">" + data.user.displayName + "</h5>\n" +
//         "    \n" +
//         "  </div>\n" +
//         "</div>");
// }
//
// function googleSignIn(data){
//     if(data.disconnected){
//         console.log("can't log in: disconnected from socket server")
//         fixUI();
//     }else{
//         data.loggingIn = true;
//         firebase.auth().signInWithPopup(data.provider).then(function (result) {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = result.credential.accessToken;
//             // The signed-in user info.
//             //result.user;
//
//         }).catch(function (error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorCode);
//             console.log(errorMessage);
//             // The email of the user's account used.
//
//             data.loggingIn = false;
//         });
//     }
// }
//
// function googleSignOut(data){
//     firebase.auth().signOut();
//     data.user = null;
// }

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
function login()
{
    initializeFirebaseApp();
    const email = document.getElementById("txtLogin").innerText;
    const password = document.getElementById("txtPassword").innerText;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    stateChange();
    alert("reached this place");
}

function signup()
{
    initializeFirebaseApp();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    stateChange();
}

function stateChange()
{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            // ...
        }
    });

}