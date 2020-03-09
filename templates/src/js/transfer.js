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
    let receiverEmail = $("#receiver-email").val();
    // The receiver should have an account with us
    // TODO: Need to change the hard coded value of the receiver
    // let receiverUid = getReceiverUid(receiverEmail);
    let receiverUid = $("#receiver-uid").val();
    // Minor error handling statements
    if(srcCountry === "")
    {
        window.alert("Have to enter some information");
    }
    else if (srcCountry === destCountry ) {
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
            matchedRequest: "",
            receiver: receiverUid
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

function getReceiverUid(receiverEmail)
{
    let db = firebase.firestore();
    let collection = db.collection("users").get();
    console.log(collection);
    // for(let i in collection)
    // {
    //     console.log(i);
    //
    // }

}