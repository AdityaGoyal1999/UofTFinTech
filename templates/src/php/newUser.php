<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>

    <!-- IMPORTS -->
    <script src="../../import/js/jquery-3.4.1.min.js"></script>
    <script src="../../import/js/firebase-app.js"></script>
    <script src="../../import/js/firebase-auth.js"></script>
    <script src="../../import/js/firebase-firestore.js"></script>

    <!-- OUR CODE -->
    <script src="../js/firebaseConfig.js"></script>
    <script src="../js/newUser.js"></script>
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
        <h2 id="heading">Welcome to Kabootar!</h2>
        <div>Please provide the following information to complete registration.</div>
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
