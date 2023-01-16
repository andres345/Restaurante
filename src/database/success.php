//success.php
<?php
    session_start();
    include('dbcon.php');
 
    session_start();

    if($_SESSION['rol'] == 1){
        header('location: /Dashboard');
    }else if($_SESSION['rol'] == 2){
        header('location: /home');
    }
 
?>
<!DOCTYPE html>
<html>
<head>
    <title>Vue.js Axios Login with PHP MySQLi</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <div class="jumbotron">
            <h1 class="text-center">Welcome, <?php echo $row['username']; ?>!</h1>
            <a href="logout.php" class="btn btn-primary"><span class="glyphicon glyphicon-log-out"></span> Logout</a>
        </div>
    </div>
</body>
</html>