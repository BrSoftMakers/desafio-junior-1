<?php

class NewController{
    public function index(){
        try{
            $loader = new \Twig\Loader\FilesystemLoader('app/view');
            $twig = new \Twig\Environment($loader);
            $template = $twig->load('new.html');

           
            $conteudo = $template->render();
            echo $conteudo;
            
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    public function insert(){
        try{
        Animal::newAnimal($_POST);
            echo '<script>location.href="http://localhost/dev/"</script>';
            echo '<script>alert("Salvo...")</script>';
        }catch(Exception $e){
            echo '<script>alert("'.$e->getMessage().'")</script>';
            echo '<script>location.href="http://localhost/dev/?page=new"</script>';
        }
    }
}