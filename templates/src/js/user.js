$(function() {
    initializeFirebaseApp();

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user);
            let displayName = user.displayName;
            let email = user.email;
            // could use this to check if the user has logged in successfully and then load his entry in the database
            let emailVerified = user.emailVerified;
            let photoURL = user.photoURL;
            let isAnonymous = user.isAnonymous;
            let uid = user.uid;
            let providerData = user.providerData;

            //TODO: Only save if user doesn't exist
            saveUser(email, displayName, uid);


            $("#profilePic").attr("src", photoURL);
            $("#usernameHeader").html(displayName);
            $("#userEmail").html(email);
            onRating(function(rating){
                $("#ratingValue").html(rating);
            });
        } else {
            // User is signed out.
            // ...
        }
    });
});
