//dbcon.php
<?php
class ApptivaBD {
    private $host = "localhost";
    private $usuario = "root";
    private $clave = "";
    private $db = "reservabd";
    public $conexion;
    public function__construct(){
        $this->conexion = new mysqli($this->host, $this->usuario, $this->clave, $this->db)
        or die(mysql_error());
        $this->conexion->set_charset("utf8");
    }
    
    //INSERTAR
    public function insertar($table, $datos){
        $resultado = $this->conexion->query("INSERT INTO $tabla VALUES (null,$datos)") or die($this->conexion->error);
        if($resultado)
            return true;
        return false;
    }

    //ACTUALIZAR
    public function actualizar($tabla, $campos, $condicion){
        $resultado = $this->conexion->query("UPDATE $tabla SET $campos WHERE $condicion") or die($this->conexion->error);
        if($resultado)
            return true;
        return false;
    }

    //BUSCAR
    public function buscar($tabla, $condicion){
        $resultado = $this->conexion->query("SELECT * FROM $tabla WHERE $condicion") or die($this->conexion->error);
        if($reultado)
            return $resultado->fetch_all(MYSQLI_ASSOC);
        return false;
    }
}

// $conn = new mysqli('localhost','root','','reservabd');
// if ($conn->connect_error) {
//     die('Error : ('. $conn->connect_errno .') '. $conn->connect_error);
// }
?>