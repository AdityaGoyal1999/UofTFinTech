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

function findNewMatches(doc, dbRef){
    logHTML("FINDING MATCHES FOR " + doc.id);

    let fbFieldValue = firebase.firestore.FieldValue;
    let dateToTimestamp = firebase.firestore.Timestamp.fromDate;
    let currentTimestamp = dateToTimestamp(new Date());
    let requestRef = dbRef.doc(doc.id);
    let request = doc.data();

    dbRef.where("srcCountry", "==", request.destCountry)
    .where("destCountry", "==", request.srcCountry) // TODO: Fix so that we only query requests submitted before lastCheckDate
    .get().then(function(snapshot){
        let matchCount = 0;
        snapshot.forEach(function(doc){
            if(validMatch(request, doc.data())){
                requestRef.update({
                    potentialMatches: fbFieldValue.arrayUnion(doc.id)
                });
                matchCount++;
            }
        });
        logHTML("FOUND " + matchCount + " MATCHES FOR " + doc.id);
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