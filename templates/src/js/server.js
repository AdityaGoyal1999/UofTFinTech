$(function(){
    initializeFirebaseApp();

    let dbRef = firebase.firestore().collection("requests");
    dbRef.get().then(function(snapshot){
        snapshot.forEach(function(doc){
            findNewMatches(doc, dbRef);
        });
    }).catch(function(error){
        console.log("Error getting documents: ", error);
    });
});

function findNewMatches(srcDoc, dbRef){
    logHTML("FINDING MATCHES FOR " + srcDoc.id);

    let fbFieldValue = firebase.firestore.FieldValue;
    let dateToTimestamp = firebase.firestore.Timestamp.fromDate;
    let currentTimestamp = dateToTimestamp(new Date());
    let requestRef = dbRef.doc(srcDoc.id);
    let request = srcDoc.data();

    dbRef.where("srcCountry", "==", request.destCountry)
        .where("destCountry", "==", request.srcCountry)
        .where("submitDate", ">=", request.lastCheckDate)
    .get().then(function(snapshot){
        let matchCount = 0;
        snapshot.forEach(function(targetDoc){
            if(validMatch(request, targetDoc.data())){
                requestRef.update({
                    potentialMatches: fbFieldValue.arrayUnion(targetDoc.id)
                });
                dbRef.doc(targetDoc.id).update({
                    potentialMatches: fbFieldValue.arrayUnion(srcDoc.id)
                });
                matchCount++;
            }
        });
        logHTML("FOUND " + matchCount + " MATCHES FOR " + srcDoc.id);
    }).catch(function(error){
        console.log("Error getting documents: ", error);
    });

    requestRef.update({lastCheckDate: currentTimestamp});
}

function validMatch(req1, req2){
   if(Math.abs(req1.amount - req2.amount) > req1.flexibility + req2.flexibility)
       return false;
   if(req1.user === req2.user)
       return false;
   return true;
}

function logHTML(message){
    $("#log").append(message.toString() + "<br>");
}