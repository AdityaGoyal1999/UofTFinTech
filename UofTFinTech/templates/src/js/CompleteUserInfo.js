$(function() {
    initializeFirebaseApp();

    firebase.auth().onAuthStateChanged(function (user) {
        console.log(user);
        if (user) {
            var displayName = user.displayName;
            var email = user.email;
            // could use this to check if the user has logged in successfully and then load his entry in the database
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            // saveData(email, displayName, uid);

            $("#heading").html("Welcome to your Dashboard, "+displayName+".");
            $("#profilePic").attr("src", photoURL);
            $("#username").attr("value", displayName);
            $("#email").attr("value", email);

        } else {
            // User is signed out.
            // ...
        }
    });
});