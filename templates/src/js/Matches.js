
// // TODO: Check if info is getting received

// TODO: Access the values of the pending users
$(function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let reqID = urlParams.get("reqID");

    let db = firebase.firestore();
    let docRef = db.collection("requests").doc(reqID);
    docRef.get().then(function(doc) {
        if (doc.exists) {
            let potentialMatches = doc.data().potentialMatches;
            for(var i = 0; i < potentialMatches.length; i++)
            {
                displayPotentialMatches(potentialMatches[i]);
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
});

function displayPotentialMatches(matchUid)
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
                        "                <th scope=\"row\">" + "<a href='ConnectedUser.html" + "?userId=" + reqDoc.data().user + "'>" + userDoc.data().name + "</a>" + "</th>\n" +
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

function fetchName(userUid)
{
    let db = firebase.firestore();
    let docRef = db.collection("users").doc(userUid);
    let name = null;
    docRef.get().then(function(doc) {
        if (doc.exists) {
            // console.log(doc.data().name);
            name = doc.data().name;
            return name;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    return name;
}