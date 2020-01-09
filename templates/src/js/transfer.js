$(function(){
    initializeFirebaseApp();
});

function saveRequest()
{
    let country = $("#country").val();
    let amount = $("#amount").val();
    let flexibility = $("#flexibility").val();
    let deadline = $("#deadline").val();

    let firebaseRef = firebase.database().ref();
}