$(function(){
    initializeFirebaseApp();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let receiverId = urlParams.get("receiverId");
    let senderId = urlParams.get("senderId");

    let db = firebase.firestore();
    let docRef = db.collection("users").doc(receiverId);

    docRef.get().then(function(doc) {
        if (doc.exists) {

            // // TODO: Using user.js value. Change this to the url mentioned by the user.
            // $("#profilePic").attr("src", photoURL);
            $("#usernameHeader").html(doc.data().name);
            $("#userEmail").html(doc.data().email);

            $("#message-user").attr(onclick, createChat(senderId, receiverId));
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
});