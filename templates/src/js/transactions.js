var requestGlobal;

$(function(){
    initializeFirebaseApp();

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            displayTransactions();
        } else {
            // User is signed out.
            // ...
        }
    });
});

function displayTransactions(){
    let uid = firebase.auth().currentUser.uid;
    let db = firebase.firestore();
    let refSending = db.collection("requests").orderBy("submitDate", "desc").where("user", "==", uid);
    // TODO: Should fix these as not showing the people who are receiving the money
    let refReceiving = db.collection("requests").orderBy("submitDate", "desc").where("receiver", "==", uid);
    refSending.get()
        .then(function(snapshot) {
            snapshot.forEach(function(doc){
                appendRequest(doc, uid, "Sender");
            });
        })
        .catch(function(error){
            console.log("Error getting documents: ", error);
        });
    // to show the person that is getting the money
    refReceiving.get()
        .then(function(snapshot) {
            snapshot.forEach(function(doc){
                // console.log("Works");
                appendRequest(doc, uid, "Receiver");
            });
        })
        .catch(function(error){
            console.log("Error getting documents: ", error);
        });
}


function appendRequest(requestDoc, uid, role){

    let requestInfo = requestDoc.data();
    $("#table-body").append("" +
        "            <tr>\n" +
        "                <th scope=\"row\">"+ "<a href='Matches.html" + "?reqID=" + requestDoc.id + "&userId=" + uid + "'" +" >" + requestInfo.submitDate.toDate().toGMTString() + "</th>\n" +
        "                <td>" + role + "</td>\n" +
        "                <td>" + requestInfo.srcCountry + "</td>\n" +
        "                <td>" + requestInfo.destCountry + "</td>\n" +
        "                <td>" + requestInfo.amount + "</td>\n" +
        "                <td>" + requestInfo.flexibility + "</td>\n" +
        "                <td>" + requestInfo.status + "</td>\n" +
        "                <td>" + requestInfo.deadlineDate.toDate().toGMTString() + "</a>" + "</td>\n" +
        "            </tr>");
}

