function saveData(email, name, uid)
{
    let db = firebase.firestore();

    db.collection("users").doc(uid).set({
        email: email,
        name: name,
        totalRating: 0,
        ratingCount: 0,
        requestCount: 0,
        requests: []
    }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function onRating(callback)
{
    // let firebaseRef = firebase.database().ref(firebase.auth().currentUser.uid + "/ratings");
    // return firebaseRef.on('value', function(snapshot) {
    //     let rating = snapshot.val() | "N/A";
    //     callback(rating);
    // });
}
