<?php

class DeleteController{
    public function index($param){
        try{
            Animal::deleteAnimal($param);
            echo '<script>location.href="http://localhost/dev/"</script>';
            echo '<script>alert("Excluido...")</script>'; 
        }catch(Exception $e){
            echo '<script>alert("'.$e->getMessage().'")</script>';
        }
    }
   
}