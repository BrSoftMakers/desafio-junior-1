<?php

require_once 'Controller.php';

class ControllerPet
{

    private $pdo;
    

    public function __construct($dbname, $host, $user, $password)
    {
        $c = new Controller($dbname, $host, $user, $password);
        $this->pdo = $c->getPDO();
    }

    public function getPets()
    {
        $res = array();
        $pets = $this->pdo->query("SELECT p.id, p.idade, p.id_tutor, p.nome, p.raca, p.tipo, t.nome_tutor FROM pet p , tutor t WHERE p.id_tutor = t.cpf; ORDER BY id");
        $res = $pets->fetchAll(PDO::FETCH_ASSOC);
        return $res;
    }

    public function addPet($nome_tutor, $id_tutor, $telefone, $tipo, $nome, $raca, $idade)
    {
        //verificar se tutor ja está cadastrado
        $pets = $this->pdo->prepare("SELECT cpf FROM tutor where cpf= :cpf");
        $pets->bindValue("cpf", $id_tutor);
        $pets->execute();
        if ($pets->rowCount() > 0) { //tutor cadastrado
            //verificar se o pet ja é cadastrado comprando nome pet e cpf do tutor
            $nomePet = $this->pdo->prepare("SELECT nome FROM pet where id_tutor =:cpf AND nome=:nomePet");
            $nomePet->bindValue("cpf", $id_tutor);
            $nomePet->bindValue("nomePet", $nome);
            $nomePet->execute();
            if ($nomePet->rowCount() > 0) { //pet ja cadastrado
                return false;
            } else {
                $pets = $this->pdo->prepare("INSERT INTO pet (idade , id_tutor, nome , raca, tipo ) VALUES (:i, :it, :n, :r, :t)");
                $pets->bindValue(":n", $nome);
                $pets->bindValue(":r", $raca);
                $pets->bindValue(":i", $idade);
                $pets->bindValue(":t", $tipo);
                $pets->bindValue(":it", $id_tutor);
                $pets->execute();

                return true;
            }
        } else { //tutor não cadastrado

            //addTutor
            $tutor = $this->pdo->prepare("INSERT INTO tutor (cpf, nome_tutor ,telefone)VALUES (:cpf, :n, :t)");
            $tutor->bindValue(":cpf", $id_tutor);
            $tutor->bindValue(":n", $nome_tutor);
            $tutor->bindValue(":t", $telefone);
            $tutor->execute();

            //addPet
            $pets = $this->pdo->prepare("INSERT INTO pet (idade , id_tutor, nome , raca, tipo ) VALUES (:i, :it, :n, :r, :t)");
            $pets->bindValue(":n", $nome);
            $pets->bindValue(":r", $raca);
            $pets->bindValue(":i", $idade);
            $pets->bindValue(":t", $tipo);
            $pets->bindValue(":it", $id_tutor);
            $pets->execute();

            return true;
        }

    }

    public function deletePet($id)
    {
        $pet = $this->pdo->prepare("DELETE FROM pet WHERE id=:id");
        $pet->bindValue(":id", $id);
        $pet->execute();
    }

    public function getPet($id)
    {
        $res = array();
        $pet = $this->pdo->prepare("SELECT * FROM pet WHERE id=:id");
        $pet->bindValue(":id", $id);
        $res = $pet->fetch(PDO::FETCH_ASSOC);

        return $res;
    }

    public function setDateUp($content)
    {
        $this->dateUp = $content;
    }

    public function setPet($nome_tutor, $id_tutor, $telefone, $tipo, $nome, $raca, $idade)
    {}


      // -------------------------agendamentos--------------------------------


    public function addAgendamento($id_pet, $dia, $hora , $servico){
     
          $pet = $this->pdo->prepare("INSERT INTO agendamento(dia , hora , id_pet, servico ) VALUES (:d, :h ,:id, :s)");
          $pet->bindValue(":d",$dia);
          $pet->bindValue(":h",$hora);
          $pet->bindValue(":id",$id_pet);
          $pet->bindValue(":s",$servico);
          $pet->execute();



        return true;
    }

    public function getAgendamentos(){
      $res = array();
      $pets = $this->pdo->query("SELECT a.id , a.id_pet, p.nome, a.dia, a.hora, a.servico FROM `agendamento` as a, `pet` as p  WHERE a.id_pet = p.id; ORDER BY a.dia");
      $res = $pets->fetchAll(PDO::FETCH_ASSOC);
      return $res;
    }

    public function deleteAgendamento($id){
        $pet = $this->pdo->prepare("DELETE FROM agendamento WHERE id=:id");
        $pet->bindValue(":id", $id);
        $pet->execute();
    }

}
