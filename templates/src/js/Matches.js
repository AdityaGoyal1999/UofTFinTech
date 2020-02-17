
// // TODO: Check if info is getting received

// TODO: Access the values of the pending users
$(function(){
    let uid = document.location.search.replace(/^.*?\=/, "");

    let db = firebase.firestore();
    let docRef = db.collection("requests").doc(uid);
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
    docRef.get().then(function(doc) {
        if (doc.exists) {
            $("#matches-table-body").append("" +
                "            <tr>\n" +
                "                <th scope=\"row\">" + "<a href='ConnectedUser.html" + "?userId=" + doc.data().user + "'>" + fetchName(doc.data().user) + "</a>" + "</th>\n" +
                "                <td>"+ doc.data().submitDate.toDate().toGMTString() +"</td>" +
                "                <td>" + doc.data().amount + "</td>\n" +
                "                <td>" + (doc.data().amount-doc.data().flexibility) + " or " + (doc.data().amount+doc.data().flexibility) +"</td>" +
                "                <td>" + doc.data().deadlineDate.toDate().toGMTString() + "</td>\n" +
                "            </tr>");
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
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