<?php
    $server = "localhost";
    $user = "root";
    $pass = "";
    $bd = "crud";

    if($conn = mysqli_connect($server, $user, $pass, $bd) ){
    }else{
        echo "Error!";
    }

    function mensage($texto, $tipo){
        echo"<div class='alert alert-$tipo' role='alert'>
                $texto
        </div>";
    }

    function mover_foto($vetor_foto) {
        $vtipo = explode('/',$vetor_foto['type']);
        $tipo = $vtipo[0] ?? '';
        $extensao = "." . $vtipo[1] ?? '';
        if( (!$vetor_foto['error']) and ($vetor_foto['size'] <= 500000)and($tipo == "image")) {
            $nome_arquivo = date('Ymdhms') . $extensao;
            move_uploaded_file( $vetor_foto['tmp_name'],"../img/". $nome_arquivo);
            return $nome_arquivo;
        } else {
            return 0;
        }
    }

?>