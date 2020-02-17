$(function(){
    initializeFirebaseApp();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let userId = urlParams.get("userId");

    let db = firebase.firestore();
    let docRef = db.collection("users").doc(userId);

    docRef.get().then(function(doc) {
        if (doc.exists) {

            // // TODO: Using user.js value. Change this to the url mentioned by the user.
            // $("#profilePic").attr("src", photoURL);
            $("#usernameHeader").html(doc.data().name);
            $("#userEmail").html(doc.data().email);


        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
});