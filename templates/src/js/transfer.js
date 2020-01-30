$(function(){
    initializeFirebaseApp();
});

/**
 * matched - Means that a request is matched.
 * pending - Means that a request is pending.
 * withdrawn - Means that the request has been removed.
 */
function saveRequest() {
    var srcCountry = $("#srcCountry").val();
    var destCountry = $("#destCountry").val();
    var amount = $("#amount").val();
    var flexibility = $("#flexibility").val();
    var deadline = $("#deadline").val();

    // Minor error handling statements
    if (srcCountry === destCountry) {
        window.alert("Couldn't be transfered to the same country");
    }
    else if(amount%10 !== 0)
    {
        window.alert("Has to be in denominations of 10s");
    }

    else {
        var firebaseRef = firebase.database().ref(firebase.auth().currentUser.uid);
        firebaseRef.once('value').then(function (snapshot) {
            if (!snapshot.exists())
                return;

            //TODO: requests not saving properly in database
            var requestCount = snapshot.val().requestCount;
            console.log(requestCount);
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
}