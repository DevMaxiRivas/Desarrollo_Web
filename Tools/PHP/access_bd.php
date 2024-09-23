<?php
class Database
{
    private $host = '10.40.42.13';
    private $port = '80';
    private $dbname = 'nombre_de_tu_base';
    private $username = 'tu_usuario';
    private $password = 'tu_contraseña';
    private $pdo;

    // Constructor para establecer la conexión
    public function __construct()
    {
        try {
            $dsn = "sqlsrv:Server={$this->host},{$this->port};Database={$this->dbname}";
            $this->pdo = new PDO($dsn, $this->username, $this->password);
            // Configuraciones opcionales de PDO
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Error en la conexión: " . $e->getMessage());
        }
    }

    // Método para ejecutar una consulta
    public function query($sql, $params = [])
    {
        try {
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute($params);
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            die("Error en la consulta: " . $e->getMessage());
        }
    }

    // Método para cerrar la conexión
    public function closeConnection()
    {
        $this->pdo = null;
    }
}

// Ejemplo de uso:
$db = new Database();
$resultado = $db->query("SELECT * FROM tabla");
print_r($resultado);
$db->closeConnection();
