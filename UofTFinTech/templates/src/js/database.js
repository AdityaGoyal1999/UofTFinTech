
function saveData(email, name, uid)
{
    var firebaseRef = firebase.database().ref();
    firebaseRef.child(uid+"/email").set(email);
    firebaseRef.child(uid+"/name").set(name);
    firebaseRef.child(uid+"/ratings").set(0);
    firebaseRef.child(uid+"/request").set(0);
    firebaseRef.child(uid+"/request/location").set(0);
    firebaseRef.child(uid+"/request/time").set(0);
    firebaseRef.child(uid+"/request/flexibility").set(0);
}
