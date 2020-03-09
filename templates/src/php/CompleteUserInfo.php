<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>

    <!-- CDN IMPORTS -->
    <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
    <script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-database.js"></script>

    <script src="https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.css" />
    <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />

    <!-- OUR CODE -->
    <script src="../js/firebaseConfig.js"></script>
    <script src="../js/CompleteUserInfo.js"></script>
    <script src="../js/database.js"></script>

    <!--CSS FILES-->
    <link rel="stylesheet" href="../../import/css/bootstrap.min.css">
    <script src="../../import/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/CompleteUserInfo.css">
</head>
<body>

    <?php include("includes/header.php"); ?>

    <div class="div1 user-profile">
        <h2 id="heading">Welcome to your Dashboard!</h2>
        <!--Change this information according to the user-->
        <img id="profilePic" src="" alt="User's Profile Picture">
        <br>
        <form>
            Name:<br>
            <input id="username" size="30" type="text" name="name" value="" readonly>
            <br>
            Location:<br>
            <input id="location" size="30" type="text" name="password" value="" readonly>
            <br>
            Phone:<br>
            <input id="phone number" size="30" name="phone number" type="text"  value="" readonly>
            <br>
            Email <br>
            <input id="email" name="email" size="30" type="text" value="" readonly>
            <br>
            Date of Birth: <br>
            <input id="dob" name="Date Of Birth" size="30" type="text" value="" readonly>
        </form>
    </div>

    <?php include("includes/footer.php"); ?>
</body>
