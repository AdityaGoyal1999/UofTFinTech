<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Matches</title>

    <!--TODO: Check these imports-->
    <script src="../../import/js/jquery-3.4.1.min.js"></script>
    <script src="../../import/js/firebase-app.js"></script>
    <script src="../../import/js/firebase-auth.js"></script>
    <script src="../../import/js/firebase-firestore.js"></script>

    <script src="https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.css" />
    <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />

    <script src="../js/firebaseConfig.js"></script>
    <!-- OUR CODE -->
    <script src="../js/transactions.js"></script>
    <script src="../js/Matches.js"></script>

    <!--IMPORTS-->
    <link rel="stylesheet" href="../../import/css/bootstrap.min.css">
    <script src="../../import/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/Matches.css">
</head>
<body>
<?php include("includes/header.php"); ?>

<h1>Possible Matches</h1>
<br>
<div id="div1">
    <h2>Your transactions</h2>

    <table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <!--<th scope="col">Ratings</th>-->
            <th scope="col">Date of Request</th>
            <th scope="col">Amount</th>
            <!--Should show the flexibilty with the amount only-->
            <th scope="col">Flexibility</th>
            <th scope="col">Deadline</th>
            <!--<th scope="col">Match Percent</th>-->
            <!--<th scope="col">Match?</th>-->
        </tr>
        </thead>
        <tbody id="matches-table-body">



        </tbody>

    </table>
</div>
<br>
<p id="end-of-results">The end of results.</p>

<?php include("includes/footer.php"); ?>
</body>
</html>