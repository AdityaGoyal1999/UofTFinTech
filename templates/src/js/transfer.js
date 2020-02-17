$(function(){
    initializeFirebaseApp();
});

/**
 * matched - Means that a request is matched.
 * pending - Means that a request is pending.
 * withdrawn - Means that the request has been removed.
 */
function saveRequest() {
    $("#submitButton").attr("disabled", true);

    let uid = firebase.auth().currentUser.uid;
    let db = firebase.firestore();
    let Timestamp = firebase.firestore.Timestamp;

    let srcCountry = $("#srcCountry").val();
    let destCountry = $("#destCountry").val();
    let amount = $("#amount").val();
    let flexibility = $("#flexibility").val();
    let deadline = $("#deadline").val();

    // Minor error handling statements
    if (srcCountry === destCountry) {
        window.alert("You can't transfer to the same country.");
        $("#submitButton").attr("disabled", false);
    } else if(amount%10 !== 0) {
        window.alert("Transaction amount has to be in denominations of 10s");
        $("#submitButton").attr("disabled", false);
    } else {
        db.collection("requests").add({
            user: uid,
            srcCountry: srcCountry,
            destCountry: destCountry,
            submitDate: Timestamp.fromDate(new Date()),
            lastCheckDate: new Timestamp(1, 0),
            deadlineDate: Timestamp.fromDate(new Date(deadline)),
            amount: parseInt(amount),
            flexibility: parseInt(flexibility),
            status: "pending",
            potentialMatches: [],
            matchedRequest: ""
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            $("#submissionModal").modal();
        }).catch(function(error) {
            console.error("Error adding document: ", error);
            window.alert("An error occurred during request submission: " + error);
            $("#submitButton").attr("disabled", false);
        });
    }
}