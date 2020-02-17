function createChat(senderUid, receiverUid)
// these UIDs are of the users
{
    let db = firebase.firestore();

    db.collection("chats").add({
        people: [senderUid, receiverUid],
        messages: {}
        // user: uid,
        // srcCountry: srcCountry,
        // destCountry: destCountry,
        // submitDate: Timestamp.fromDate(new Date()),
        // lastCheckDate: new Timestamp(1, 0),
        // deadlineDate: Timestamp.fromDate(new Date(deadline)),
        // amount: parseInt(amount),
        // flexibility: parseInt(flexibility),
        // status: "pending",
        // potentialMatches: [],
        // matchedRequest: ""
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $("#submissionModal").modal();
    }).catch(function(error) {
        console.error("Error adding document: ", error);
        window.alert("An error occurred during request submission: " + error);
        $("#submitButton").attr("disabled", false);
    });
}