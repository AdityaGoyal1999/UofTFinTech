// var displayName;
/**
 * User.js should have the complete data of the currently logged in user. user.html and CompleteUserInfo.html should use
 * this file to access the user-information.
 */

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

            saveData(email, displayName, uid);

            $("#profilePic").attr("src", photoURL);
            $("#usernameHeader").html(displayName);
            $("#locationParagraph").html(email);

        } else {
            // User is signed out.
            // ...
        }
    });
});

// document.getElementById("Welcome").innerHTML = displayName;