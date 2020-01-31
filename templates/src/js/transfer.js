$(function(){
    initializeFirebaseApp();
});

/**
 * matched - Means that a request is matched.
 * pending - Means that a request is pending.
 * withdrawn - Means that the request has been removed.
 */
function saveRequest() {
    let uid = firebase.auth().currentUser.uid;
    let db = firebase.firestore();
    let dateToTimestamp = firebase.firestore.Timestamp.fromDate;

    var srcCountry = $("#srcCountry").val();
    var destCountry = $("#destCountry").val();
    var amount = $("#amount").val();
    var flexibility = $("#flexibility").val();
    var deadline = $("#deadline").val();

    // Minor error handling statements
    if (srcCountry === destCountry) {
        window.alert("Couldn't be transfered to the same country");
    } else if(amount%10 !== 0) {
        window.alert("Has to be in denominations of 10s");
    } else {
        db.collection("requests").add({
            user: uid,
            srcCountry: srcCountry,
            destCountry: destCountry,
            submitDate: dateToTimestamp(new Date()),
            lastCheckDate: dateToTimestamp(new Date()),
            deadlineDate: dateToTimestamp(new Date(deadline)),
            amount: parseInt(amount),
            flexibility: parseInt(flexibility),
            status: "pending",
            potentialMatches: [],
            matchedRequest: ""
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}