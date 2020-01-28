// $(function(){
//     initializeFirebaseApp();
//
//     let firebaseRef = firebase.database().ref();
//     firebaseRef.once('value').then(function(snapshot) {
//         if(!snapshot.exists())
//             return;
//
//         // the same countries are stored in this list
//         let unmatchedRequests = [];
//         let usersRequests = [];
//
//         let users = snapshot.val();
//         console.log(users);
//         for(let uid in users){
//             let user = users[uid];
//             for(let i=0; i<user.requestCount; i++){
//                 let request = user.requests["req"+i];
//                 if(uid == firebase.auth().currentUser.uid)
//                     usersRequests.push(request);
//                 else if(request.match != "null")
//                     unmatchedRequests.push(request);
//             }
//         }
//
//     });
// })
$(function() {
        // initializeFirebaseApp();
        // TODO: has to send in the location of the user to the function
        var countryLocation = "Angola";
        //TODO: has to get the UID of the customer
        var uid;
        unmatchedCountry = [];
        let firebaseRef = firebase.database().ref();
        console.log(firebaseRef);
        firebaseRef.once('value').then(function (snapshot) {
            let snap = snapshot.val();
            // i is the userid of the user
            for (var i in snap) {
                if(i === uid)
                {
                    // user won't be able to get his own request
                    continue;
                }
                for (var j in snap[i]) {
                    if (j === "requests") {
                        for (var k in snap[i][j]) {
                            for(var l in snap[i][j][k])
                            {
                                if(l === "destCountry" && snap[i][j][k]["destCountry"] === countryLocation)
                                {
                                    unmatchedCountry.push(i+"/"+j+"/"+k+"/");
                                }
                                else{
                                }
                            }
                        }
                    }
                }
            }
        })
    }
);