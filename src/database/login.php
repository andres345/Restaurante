//login.php
<?php
session_start();
include('dbcon.php');
 
$out = array('error' => false);
 
$username = $_POST['username'];
$password = $_POST['password'];
 
if($username==''){
    $out['error'] = true;
    $out['message'] = "Username is required";
}
else if($password==''){
    $out['error'] = true;
    $out['message'] = "Password is required";
}
else{
    $sql = "select * from usuario where email='$username' and pass='$password'";
    $query = $conn->query($sql);
 
    if($query->num_rows>0){
        $row=$query->fetch_array();
        $_SESSION['user']=$row['idUsuario'];
        $out['message'] = "Login Successful";
    }
    else{
        $out['error'] = true;
        $out['message'] = "Usuario no encontrado";
    }
}
     
$conn->close();
 
header("Content-type: application/json");
echo json_encode($out);
die();
?>