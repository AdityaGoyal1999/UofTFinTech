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

function appendRequest(request){
    $("#table-body").append("" +
        "            <tr>\n" +
        "                <th scope=\"row\">"+ "<a href='Matches.html' onclick='sendInfo(request)'>" + request.submitDate.toDate().toGMTString() + "</th>\n" +
        "                <td>" + request.srcCountry + "</td>\n" +
        "                <td>" + request.destCountry + "</td>\n" +
        "                <td>" + request.amount + "</td>\n" +
        "                <td>" + request.flexibility + "</td>\n" +
        "                <td>" + request.status + "</td>\n" +
        "                <td>" + request.deadlineDate.toDate().toGMTString() + "</a>" + "</td>\n" +
        "            </tr>");
}

