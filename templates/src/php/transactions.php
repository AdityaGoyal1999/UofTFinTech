<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Transactions</title>

    <script src="../../import/js/jquery-3.4.1.min.js"></script>
    <script src="../../import/js/firebase-app.js"></script>
    <script src="../../import/js/firebase-auth.js"></script>
    <script src="../../import/js/firebase-firestore.js"></script>

    <script src="https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.css" />
    <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />

    <!-- OUR CODE -->
    <script src="../js/firebaseConfig.js"></script>
    <script src="../js/transactions.js"></script>
    <script src="../js/Matches.js"></script>

    <!--IMPORTS-->
    <link rel="stylesheet" href="../../import/css/bootstrap.min.css">
    <script src="../../import/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/transactions.css">
</head>
<body>
    <?php include("includes/header.php"); ?>

    <div id="div1">
    <h2>Your transactions</h2>

        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">Date of Request</th>
                <th scope="col">Source Country</th>
                <th scope="col">Destination Country</th>
                <th scope="col">Amount</th>
                <th scope="col">Flexibility</th>
                <th scope="col">Status</th>
                <th scope="col">Deadline</th>
            </tr>
            </thead>
            <tbody id="table-body">



            </tbody>
        </table>
    </div>

    <?php include("includes/footer.php"); ?>
</body>
</html>