<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ConnectedUser</title>

    <!--IMPORTS-->
    <link rel="stylesheet" href="../../import/css/bootstrap.min.css">

    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/ConnectedUser.css">

    <script src="../../import/js/jquery-3.4.1.min.js"></script>
    <script src="../../import/js/firebase-app.js"></script>
    <script src="../../import/js/firebase-firestore.js"></script>
    <script src="../js/firebaseConfig.js"></script>

    <script src="../js/ConnectedUser.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-auth.js"></script>
    <script src="../../import/js/firebase-firestore.js"></script>

    <!--TODO: Console giving some errors-->

    <!-- OUR CODE -->
    <link rel="stylesheet" href="../../import/css/bootstrap.min.css">
    <script src="../../import/js/bootstrap.min.js"></script>

    <link type="text/css" rel="stylesheet" href="../css/base.css" />
    <link type="text/css" rel="stylesheet" href="../css/user.css" />

    <script src="../js/firebaseConfig.js"></script>
    <script src="../js/Messages.js"></script>
    <!--&lt;!&ndash;TODO: need to fix this. We shouldn't be using uer.js&ndash;&gt;-->
    <!--<script src="../js/user.js"></script>-->
    <script src="../js/database.js"></script>
</head>
<body>

<?php include("includes/header.php"); ?>

<h1>Welcome to this User's profile</h1>
<div class="connected-user-profile">
    <h2><u>User's Profile</u></h2>
    <img id="profilePic" src="" alt="User's Profile Picture">
    <br>
    <h2 id="usernameHeader">{User name}</h2>
    <br>
    <p id="userEmail">{Location}</p><br>
    <a href="Messages.php"><button id="message-user">Message User</button></a>
</div>

<?php include("includes/footer.php"); ?>

</body>
</html>