var uid;

function saveData(email, name, uid)
{
    this.uid = uid;
    var firebaseRef = firebase.database().ref();
    firebaseRef.child(uid+"/email").set(email);
    firebaseRef.child(uid+"/name").set(name);
    firebaseRef.child(uid+"/ratings").set(0);
    firebaseRef.child(uid+"/request").set(0);
    firebaseRef.child(uid+"/request/location").set(0);
    firebaseRef.child(uid+"/request/time").set(0);
    firebaseRef.child(uid+"/request/flexibility").set(0);
}

// TODO: Fix the NA shown
function getRating()
{
    var firebaseRef = firebase.database().ref();
    var rating = "NA";
    firebaseRef.on('value', function(snapshot){
        rating = snapshot.child(uid+"/ratings").val();
    });
    return rating;
}

function getName()
{
    var firebaseRef = firebase.database().ref();
    var name = "NA";
    firebaseRef.on('value', function(snapshot){
        name = snapshot.child(uid+"/name").val();
    });
    return name;
}