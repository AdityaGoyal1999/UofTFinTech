function initUserAuth(data){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDly1BVXdiDhxP1_8_NzUCidwPPiqOXUJA",
        authDomain: "swift-snake.firebaseapp.com",
        databaseURL: "https://swift-snake.firebaseio.com",
        projectId: "swift-snake",
        storageBucket: "swift-snake.appspot.com",
        messagingSenderId: "491250167307"
    };
    firebase.initializeApp(config);

    data.provider = new firebase.auth.GoogleAuthProvider();

    $("#firebaseTest").off('click').on('click', function () {
        if(data.loggingIn)
            return;
        googleSignIn(data);
    });

    firebase.auth().onAuthStateChanged(function (firebaseUser) {
        if(firebaseUser) {
            data.user = firebaseUser;
            showUser(data);
            fixUI();
            if(!data.disconnected) {
                data.loggingIn = true;
            }
        }else{
            // Update the sign-in button to Google sign-in button
            data.user = null;
            data.loggingIn = false;

            $("#firebaseTest").off('click').on('click', function () {
                if(data.loggingIn){return;}
                googleSignIn(data);
            });
            //$("#firebaseTest").html("<img src=\"assets/google/btn_google_signin_dark_normal_web@2x.png\" width=\"191\" />");
            fixUI();
        }
    });
}

function showUser(data){
    $("#userHolder").html("<div class=\"media\">\n" +
        "  <img style=\"width:64px\" src=\"" + data.user.photoURL + "\" class=\"mr-3\" alt=\"...\">\n" +
        "  <div class=\"media-body\">\n" +
        "    <h5 class=\"mt-0\">" + data.user.displayName + "</h5>\n" +
        "    \n" +
        "  </div>\n" +
        "</div>");
}

function googleSignIn(data){
    if(data.disconnected){
        console.log("can't log in: disconnected from socket server")
        fixUI();
    }else{
        data.loggingIn = true;
        firebase.auth().signInWithPopup(data.provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            //result.user;

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // The email of the user's account used.

            data.loggingIn = false;
        });
    }
}

function googleSignOut(data){
    firebase.auth().signOut();
    data.user = null;
}
