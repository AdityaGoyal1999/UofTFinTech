$(function() {
    initializeFirebaseApp();

    firebase.auth().onAuthStateChanged(function (user) {
        console.log(user);
        if (user) {
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            $("#profilePic").attr("src", photoURL);
            $("#usernameHeader").html(displayName);
            $("#locationParagraph").html(email);
        } else {
            // User is signed out.
            // ...
        }
    });
});
