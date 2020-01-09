$(function(){
    initializeFirebaseApp();
});

function saveRequest()
{
    let country = $("#country").val();
    let amount = $("#amount").val();
    let flexibility = $("#flexibility").val();
    let deadline = $("#deadline").val();


    let firebaseRef = firebase.database().ref(firebase.auth().currentUser.uid);
    firebaseRef.once('value').then(function(snapshot) {
        if(!snapshot.exists())
            return;

        let requestCount = snapshot.val().requestCount;
        firebaseRef.child("/requests/req" + requestCount).set({
            country: country,
            amount: amount,
            flexibility: flexibility,
            deadline: deadline
        });
        firebaseRef.child("/requestCount").set(requestCount + 1);
    });
}