<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome Page</title>

    <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
    <script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-auth.js"></script>
    <script src="../../import/js/firebase-firestore.js"></script>

    <script src="https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.css" />
    <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />

    <!-- OUR CODE -->
    <script src="../js/firebaseConfig.js"></script>
    <script src="../js/login.js"></script>
    <script src="../js/database.js"></script>
    <script src="../js/firstLogin.js"></script>

    <!--CSS Files-->
    <link rel="stylesheet" href="../../import/css/bootstrap.min.css">
    <script src="../../import/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/firstLogin.css">
</head>
<body>

    <?php include("includes/header.php"); ?>

    <h1 id="heading1">Enter your information</h1>
    <div id="para1">
        <input type="file" id="picture"><br>
        Name:<br>
        <input type="text" id="name"><br>
        Location:<br>
        <input type="text" id="location"><br>
        Email:<br>
        <input type="text" id="email"><br>
        Mobile Number:<br>
        <input type="tel" id="phone"><br>
        Date of Birth:<br>
        <input type="date" id="dob"><br><br>
        <input type="submit" onclick="savePrimaryData()">
    </div>

    <?php include("includes/footer.php"); ?>

</body>
</html>