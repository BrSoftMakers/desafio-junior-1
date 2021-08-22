<?php
class Controller
{
// $p = new Pessoa("crudpdo", "localhost", "root", "");
    private $pdo;

    public function __construct($dbname, $host, $user, $password)
    {
        try {
            $this->pdo = new PDO("mysql:dbname=" . $dbname . ";host=" . $host, $user, $password);

        } catch (PDOException $e) {
            echo "Erro com banco de dados: " . $e->getMessage();
            exit();
        } catch (Exception $e) {
            echo "Erro genêrico: " . $e->getMessage();
            exit();
        }
    }

    public function getPDO (){
        return $this->pdo;
    }
}
