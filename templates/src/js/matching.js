$(function(){
    initializeFirebaseApp();

    let firebaseRef = firebase.database().ref();
    firebaseRef.once('value').then(function(snapshot) {
        if(!snapshot.exists())
            return;

        let unmatchedRequests = [];
        let usersRequests = [];

        let users = snapshot.val();
        for(let uid in users){
            let user = users[uid];
            for(let i=0; i<user.requestCount; i++){
                let request = user.requests["req"+i];
                if(uid == firebase.auth().currentUser.uid)
                    usersRequests.push(request);
                else if(request.match != "null")
                    unmatchedRequests.push(request);
            }
        }

    });
});