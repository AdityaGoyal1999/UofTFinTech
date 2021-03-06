<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>User</title>
    <!-- Font Awesome Icon Library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- CDN IMPORTS -->
    <script src="../../import/js/jquery-3.4.1.min.js"></script>
    <script src="../../import/js/firebase-app.js"></script>
    <script src="../../import/js/firebase-auth.js"></script>
    <script src="../../import/js/firebase-firestore.js"></script>

    <!-- FIREBASE UI IMPORTS -->
    <script src="https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.css" />
    <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />

    <!-- OUR CODE -->
    <link rel="stylesheet" href="../../import/css/bootstrap.min.css">
    <script src="../../import/js/bootstrap.min.js"></script>

    <link type="text/css" rel="stylesheet" href="../css/base.css" />
    <link type="text/css" rel="stylesheet" href="../css/user.css" />

    <script src="../js/firebaseConfig.js"></script>
    <script src="../js/user.js"></script>
    <script src="../js/database.js"></script>
</head>

<body>
    <?php include("includes/header.php"); ?>

    <h1>Welcome to your dashboard!</h1>
    <div class="user-profile">
        <h2><u>Your mini dashboard</u></h2>
        <img id="profilePic" src="" alt="Your Profile Picture">
        <br>
        <h2 id="usernameHeader">{User name}</h2>
        <br>
        <p id="userEmail">{Location}</p><br>
        <a href="CompleteUserInfo.php"><button id="user-info">User Information</button></a>
    </div>
    <br>
    <a href="transfer.php"><button id="send-button">Send money</button></a>
    <a href="transactions.php"><button id="transactions">Transactions/Requests</button></a>

    <?php include("includes/footer.php"); ?>
</body>

</html>