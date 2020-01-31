$(function(){
    initializeFirebaseApp();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let reqid = urlParams.get("reqid");
    $("#display").html("Matching " + reqid);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            displayMatches(reqid);
        } else {
            // User is signed out.
            // ...
        }
    });
});

function displayMatches(reqid){
    let db = firebase.firestore();
    let docRef = db.collection("requests").doc(reqid);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}