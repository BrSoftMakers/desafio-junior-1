<?php

include_once("conexao.php");

$sql = "select * from usuarios";
$consulta = mysqli_query($conexao,$sql);
$registros = mysqli_num_rows($consulta);

mysqli_close($conexao);

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="_css/estilo.css">
    <title>Document</title>
</head>
<body>
<div class="container">
    <h1><strong>Petl<img src="imagens/patinha.png.png" alt="patinha de cachorro"width=44 height=22>ve amor a seu pet</strong>  </h1>
<nav>
    <ul class="menu">
       <a href="index.html"> <li>cadastro</li></a>
       <a href="consultas.php"> <li>Consulta</li></a>

    </ul>
</nav>
<section>
    <h1>p
         consultas </h1> 
         <hr><br><br>

<?php

print" $registros registros encontrados";
?>
</section>
</div>

</body>

</html>