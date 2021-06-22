<?php

class Core{

    public function start($url){
        if(isset($url['metodo'])){
            $action = $url['metodo'];
        }else{
            $action = 'index';
        }
        if(isset($url['page'])){
            $controller  = ucfirst($url['page'].'Controller');
        }else{
            $controller = 'DashController';
        }
        
        if(!class_exists($controller)){
            $controller = 'ErroController';
        }

        if(isset($url['id']) && $url['id'] != null){
            $id = $url['id'];
        }else{
            $id = null;
        }
        call_user_func_array(array(new $controller, $action), array('id' => $id));
    }
}