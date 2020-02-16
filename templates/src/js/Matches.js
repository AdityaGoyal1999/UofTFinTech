
// TODO: Check if info is getting received
let uid;
function sendInfo(request)
{
    uid = request;
    $("#countryDemo").val(request.destCountry);
}