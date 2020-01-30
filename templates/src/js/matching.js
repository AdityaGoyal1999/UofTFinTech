$(function(){
    initializeFirebaseApp();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let reqid = urlParams.get("reqid");
    $("#display").html("Matching " + reqid);
});