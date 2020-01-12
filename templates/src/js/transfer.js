$(function(){
    initializeFirebaseApp();
});

function saveRequest()
{
    let srcCountry = $("#srcCountry").val();
    let destCountry = $("#destCountry").val();
    let amount = $("#amount").val();
    let flexibility = $("#flexibility").val();
    let deadline = $("#deadline").val();


    let firebaseRef = firebase.database().ref(firebase.auth().currentUser.uid);
    firebaseRef.once('value').then(function(snapshot) {
        if(!snapshot.exists())
            return;

        let requestCount = snapshot.val().requestCount;
        firebaseRef.child("/requests/req" + requestCount).set({
            srcCountry: srcCountry,
            destCountry: destCountry,
            amount: amount,
            flexibility: flexibility,
            deadline: deadline,
            match: "null"
        });
        firebaseRef.child("/requestCount").set(requestCount + 1);
    });
}