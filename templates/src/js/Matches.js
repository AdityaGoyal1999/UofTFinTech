
// // TODO: Check if info is getting received

// TODO: Access the values of the pending users
$(function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let reqID = urlParams.get("reqID");

    let db = firebase.firestore();
    let docRef = db.collection("requests").doc(reqID);

    // to get the uid
    let senderId = urlParams.get("userId");
    docRef.get().then(function(doc) {
        if (doc.exists) {
            let potentialMatches = doc.data().potentialMatches;
            if(potentialMatches.length === 0)
            {
                $("#end-of-results").html("No matches found at the moment. Try again in a bit");
            }
            for(var i = 0; i < potentialMatches.length; i++)
            {
                displayPotentialMatches(potentialMatches[i], senderId);
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
});

function displayPotentialMatches(matchUid, senderId)
{
    let db = firebase.firestore();
    let docRef = db.collection("requests").doc(matchUid);
    docRef.get().then(function(reqDoc) {
        let userRef = db.collection("users").doc(reqDoc.data().user);
        userRef.get().then(function(userDoc) {
            if (userDoc.exists) {
                if (reqDoc.exists) {
                    $("#matches-table-body").append("" +
                        "            <tr>\n" +
                        "                <th scope=\"row\">" + "<a href='ConnectedUser.html" + "?receiverId=" + reqDoc.data().user + "&senderId="+ senderId + "'>" + userDoc.data().name + "</a>" + "</th>\n" +
                        "                <td>"+ reqDoc.data().submitDate.toDate().toGMTString() +"</td>" +
                        "                <td>" + reqDoc.data().amount + "</td>\n" +
                        "                <td>" + (reqDoc.data().amount-reqDoc.data().flexibility) + " or " + (reqDoc.data().amount+reqDoc.data().flexibility) +"</td>" +
                        "                <td>" + reqDoc.data().deadlineDate.toDate().toGMTString() + "</td>\n" +
                        "            </tr>");
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}