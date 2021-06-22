<?php

class DashController{
    public function index(){
        try{
            $loader = new \Twig\Loader\FilesystemLoader('app/view');
            $twig = new \Twig\Environment($loader);
            $template = $twig->load('list.html');

            $parametros = array();
            $parametros["animais"] = Animal::getAnimais(); 

            $conteudo = $template->render($parametros);
            echo $conteudo;
            
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }
}