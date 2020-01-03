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
            // updatePage(uid);
            // showDatabaseContent();
            // window.alert(email);
            // var rating = getRating();
            // window.alert("hello");

            $("#profilePic").attr("src", photoURL);
            $("#usernameHeader").html(displayName);
            $("#locationParagraph").html(email);
        } else {
            // User is signed out.
            // ...
        }
    });
});


function updatePage(uid)
{
    // document.getElementById("ratingValue").innerText = "2.0";
    var rating = showDatabaseContent(uid);
    window.alert(rating);
}