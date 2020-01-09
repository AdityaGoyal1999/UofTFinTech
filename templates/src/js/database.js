function saveData(email, name, uid)
{
    let firebaseRef = firebase.database().ref(uid);

    return firebaseRef.once("value").then(function(snapshot){
       if(!snapshot.exists()) {
           firebaseRef.child("/ratings").set(0);
           firebaseRef.child("/requestCount").set(0);
           firebaseRef.child("/requests").set(0);
       }
       firebaseRef.child("/email").set(email);
       firebaseRef.child("/name").set(name);
    });
}

function onRating(callback)
{
    let firebaseRef = firebase.database().ref(firebase.auth().currentUser.uid + "/ratings");
    return firebaseRef.on('value', function(snapshot) {
        let rating = snapshot.val() | "N/A";
        callback(rating);
    });
}
