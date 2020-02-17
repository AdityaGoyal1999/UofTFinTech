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
    let ref = db.collection("requests").orderBy("submitDate", "desc").where("user", "==", uid);

    ref.get()
        .then(function(snapshot) {
            snapshot.forEach(function(doc){
                appendRequest(doc.data());
            });
        })
        .catch(function(error){
            console.log("Error getting documents: ", error);
        });
}

// function transferInfo(requestInfo)
// {
//     requestGlobal = ;
// }

function appendRequest(requestInfo){

    // TODO: Send requestInfo's location in place of requestInfo.destCountry
    // TODO: Change the hard coded value sent to Matches.html
    $("#table-body").append("" +
        "            <tr>\n" +
        "                <th scope=\"row\">"+ "<a href='Matches.html" + "?srcCountry=" + "40jsNh3QUEWDHLjQcpFg" + "'" +" >" + requestInfo.submitDate.toDate().toGMTString() + "</th>\n" +
        "                <td>" + requestInfo.srcCountry + "</td>\n" +
        "                <td>" + requestInfo.destCountry + "</td>\n" +
        "                <td>" + requestInfo.amount + "</td>\n" +
        "                <td>" + requestInfo.flexibility + "</td>\n" +
        "                <td>" + requestInfo.status + "</td>\n" +
        "                <td>" + requestInfo.deadlineDate.toDate().toGMTString() + "</a>" + "</td>\n" +
        "            </tr>");
}

