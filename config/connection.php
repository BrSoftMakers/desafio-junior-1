<?php

$host= "localhost";
$dbname = "CADASTRO";    
$user = "root";
$pass = "admin";


try{
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);

    //Ativa o modo de erros
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch(PDOException $e){
    //Retorna erro de conexão
    $error = $e->getMessage();
    echo "Erro: $error";
}

?>





