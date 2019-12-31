function saveData(email, name, uid)
{
    var firebaseRef = firebase.database().ref();

    firebaseRef.child(uid+"/email").set(email);
    firebaseRef.child(uid+"/name").set(name);
    firebaseRef.child(uid+"/ratings").set(0);
}