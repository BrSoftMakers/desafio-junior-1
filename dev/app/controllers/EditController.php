<?php

class EditController{
    public function index($param){
        try{
            $loader = new \Twig\Loader\FilesystemLoader('app/view');
            $twig = new \Twig\Environment($loader);
            $template = $twig->load('edit.html');

            $parametros = array();
            $parametros["animal"] = Animal::getAnimal($param); 

            $conteudo = $template->render($parametros);
            echo $conteudo;
            
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }
    public function edit(){
        try{
            Animal::edtAnimal($_POST);
            echo '<script>location.href="http://localhost/dev/"</script>';
            echo '<script>alert("Editado...")</script>';
        }catch(Exception $e){
            echo '<script>alert("'.$e->getMessage().'")</script>';
            echo '<script>location.href="http://localhost/dev/?page=edit&id='.$_POST['id'].'"</script>';
        }
    }
}