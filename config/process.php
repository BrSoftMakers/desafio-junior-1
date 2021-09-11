<?php

    session_start();

    include_once("connection.php");
    include_once("url.php");

    $data = $_POST;

    if(!empty($data)) { //Sessão Create 
       
        if($data['type'] === "create"){
            $name = $data["name"];
            $phone = $data["phone"];
            $pet = $data["pet"];
            $raca = $data["raca"];
            $idade = $data["idade"];
            $tipo = $data["tipo"];

            $query = "INSERT INTO contacts (name, phone, pet, raca, idade, tipo) VALUES (:name, :phone, :pet, :raca, :idade, :tipo)";
            
            $stmt = $conn->prepare($query);

            $stmt->bindParam(":name", $name);
            $stmt->bindParam(":phone", $phone);
            $stmt->bindParam(":pet", $pet);
            $stmt->bindParam(":raca", $raca);
            $stmt->bindParam(":idade", $idade);
            $stmt->bindParam(":tipo", $tipo);


            try{
              $stmt->execute();
              $_SESSION["msg"] = "Cadastrado com Sucesso!";
            
            }catch(PDOException $e){
                //Retorna erro de conexão
                $error = $e->getMessage();
                echo "Erro: $error";
            }
        
        }else if ($data["type"] === "update"){  // Sessão Update 
            $name = $data["name"];
            $phone = $data["phone"];
            $pet = $data["pet"];
            $raca = $data["raca"];
            $idade = $data["idade"];
            $tipo = $data["tipo"];
            $id = $data["id"];


            $query = "UPDATE contacts SET name = :name, phone = :phone, pet = :pet, raca = :raca, idade = :idade, tipo = :tipo WHERE id = :id";


            $stmt-> $conn->prepare($query);

            $stmt->bindParam(":name", $name);
            $stmt->bindParam(":phone", $phone);
            $stmt->bindParam(":pet", $pet);
            $stmt->bindParam(":raca", $raca);
            $stmt->bindParam(":idade", $idade);
            $stmt->bindParam(":tipo", $tipo);
            $stmt->bindParam(":id", $id);

            try{
                $stmt->execute();
                $_SESSION["msg"] = "Cadastro atualizado com Sucesso!";
              
              }catch(PDOException $e){
                  //Retorna erro de conexão
                  $error = $e->getMessage();
                  echo "Erro: $error";
              }




        } else if($data["type"] === "delete"){  //Deleta usuario

            $id = $data["id"];

            $query = "DELETE FROM contacts WHERE id = :id ";

            $stmt = $conn->prepare($query);
            
            $stmt->bindParam(":id", $id);

            try{
                $stmt->execute();                
                $_SESSION["msg"] = "Cliente removido com Sucesso!";
              
              }catch(PDOException $e){
                  //Retorna erro de conexão
                  $error = $e->getMessage();
                  echo "Erro: $error";
              }

        }

        //Redireciona ao index
        header("location:" . $BASE_URL . "../index.php");

    // Selecionado dados
    }else{

        $id;

        if(!empty($_GET)){
            $id = $_GET['id'];
        }

        // Retornando um unico contato
    
        if(!empty($id)){
            $query = "SELECT * FROM contacts WHERE id = :id";

            $stmt = $conn->prepare($query);

            $stmt->bindParam(":id", $id);
      
            $stmt->execute();
      
            $contact = $stmt->fetch();

        }else{
            // Retornando todos os contatos
            $contacts = [];

            $query = "SELECT * FROM contacts";
      
            $stmt = $conn->prepare($query);
      
            $stmt->execute();
            
            $contacts = $stmt->fetchAll();
        }

    }

    //Enecerrar conexão
    $conn = null;
    
    
?>