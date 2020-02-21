function createChat(senderUid, receiverUid)
// these UIDs are of the users
{
    let db = firebase.firestore();

    // only for the configuration of 2 people in a chat

    // flag is to check if the chat already exists or not
    let flag = false;
    let collection = Object.values(db.collection("chats"));
    // console.log(collection.size);

    // TODO: this section is not working. As we are not getting the list of people in each 'chats' section.
    for(let i = 0; i< collection.length; i++)
    {
        console.log(collection[i].people);
        // let listOfPeoples = collection[i].people;
        // console.log(collection[i]);
        // if(listOfPeoples.includes(senderUid) && listOfPeoples.includes(receiverUid))
        // {
        //     flag = true;
        // }
    }
    if(flag === false) {
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
        }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            $("#submissionModal").modal();
        }).catch(function (error) {
            console.error("Error adding document: ", error);
            window.alert("An error occurred during request submission: " + error);
            $("#submitButton").attr("disabled", false);
        });
    }
}

function saveChat()
{
    initializeFirebaseApp();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let receiverId = urlParams.get("receiverId");
    let senderId = urlParams.get("senderId");
    window.alert("This is working");
    let textMessage = $("#text-message").val();
    // TODO: Save this message into the database
}