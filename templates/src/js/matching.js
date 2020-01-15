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
$(function(){
    // initializeFirebaseApp();

    unmatchedCountry = [];
    let firebaseRef = firebase.database().ref();
    console.log("Over here");
    console.log(firebaseRef);
    firebaseRef.once('value').then(function(snapshot){
        let snap = snapshot.val();
        for(var i in snap){
            // console.log("\n"+i);
            for(var j in snap[i])
            {
                // console.log("\n"+j);
                if(j === "requests") {
                    // console.log(snap[i][j]);
                    for (var k in snap[i][j]) {
                        // TODO: Add approprite if conditions collect data
                        // console.log(snap[i][j][k])
                        // if(destCountry === "Angola")
                        // {
                        //     unmatchedCountry.push(snap[i][j]);
                        //     console.log(unmatchedCountry);
                    }
                }
                }
            }
        }
    // if(!snapshot.exists())
    //     return;
    //
    // for(var uid in uoftfintech)
    // {
    //     var user = users[uid];
    //     console.alert(user);
    // }
    }
    )
})