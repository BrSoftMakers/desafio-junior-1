<?php
class Animal{
    public static function getAnimais(){
        $con = Connection::getConn(); 
        $result = $con->query("SELECT * FROM ANIMAL")->fetchAll();

        if(!$result){
            throw new Exception("Nenhum dado encontrato");
        }
        return $result;
    }

    public static function getAnimal($id){
        $con = Connection::getConn(); 
        $result = $con->query("SELECT * FROM ANIMAL WHERE ID = $id")->fetchAll();

        if(!$result){
            throw new Exception("Nenhum dado encontrato");
        }
        return $result;
    }

    public static function newAnimal($dados){
        if(empty($dados['nome']) || empty($dados['tipo']) || empty($dados['raca']) ||
        empty($dados['idade']) || empty($dados['responsavel']) || empty($dados['telefone'])){
            throw new Exception("Preencha todos os campos");
            
            return false;
        }

        $con = Connection::getConn(); 
        $row =[
            'NOME' => $_POST["nome"] ?? '',
            'IDADE' => $_POST["idade"] ?? '',    
            'TIPO' => $_POST["tipo"] ?? '',
            'RACA' => $_POST["raca"] ?? '',
            'RESPONSAVEL' => $_POST["responsavel"] ?? '',
            'TELEFONE' => $_POST["telefone"] ?? ''
        ];
        
        $sql = "INSERT INTO ANIMAL SET NOME=:NOME, IDADE=:IDADE, TIPO=:TIPO, "
               ."RACA=:RACA, RESPONSAVEL=:RESPONSAVEL, CONTATO=:TELEFONE;";

        $status = $con->prepare($sql)->execute($row);

        if($status == 0){
            throw new Exception("Falha ao inserir contato o ADMIN");
            return false;
        }
        
        return true;
    }

    public static function edtAnimal($dados){
        if(empty($dados['id']) || empty($dados['nome']) || empty($dados['tipo']) || empty($dados['raca']) ||
        empty($dados['idade']) || empty($dados['responsavel']) || empty($dados['telefone'])){
            throw new Exception("Preencha todos os campos");
            
            return false;
        }

        $con = Connection::getConn(); 
        $row =[
            'ID' => $_POST['id'] ?? 0,
            'NOME' => $_POST["nome"] ?? '',
            'IDADE' => $_POST["idade"] ?? '',    
            'TIPO' => $_POST["tipo"] ?? '',
            'RACA' => $_POST["raca"] ?? '',
            'RESPONSAVEL' => $_POST["responsavel"] ?? '',
            'TELEFONE' => $_POST["telefone"] ?? ''
        ];
        
        $sql = "UPDATE ANIMAL SET NOME=:NOME, IDADE=:IDADE, TIPO=:TIPO, "
               ."RACA=:RACA, RESPONSAVEL=:RESPONSAVEL, CONTATO=:TELEFONE WHERE ID=:ID;";

        $status = $con->prepare($sql)->execute($row);

        if($status == 0){
            throw new Exception("Falha ao atualizar contato o ADMIN");
            return false;
        }
        
        return true;
    }

    public static function deleteAnimal($id){             
        $con = Connection::getConn(); 
             
        $sql = "DELETE FROM ANIMAL WHERE ID=".$id;

        $status = $con->prepare($sql)->execute();

        if($status == 0){
            throw new Exception("Falha ao excluir contato o ADMIN");
            return false;
        }
        
        return true;
        
    }
}