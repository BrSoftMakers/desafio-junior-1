<?php

include 'conexao.php';

$registroanimal= $_POST['registroanimal'];
$nomeanimal = $_POST['nomeanimal'];
$idadeanimal = $_POST['idadeanimal'];
$racaanimal = $_POST['racaanimal'];
$nomeresponsavel = $_POST['nomeresponsavel'];
$telresponsavel = $_POST['telresponsavel'];


$sql = "INSERT INTO `petshop`(`registroanimal`, `nomeanimal`, `idadeanimal`, `racaanimal`, `nomeresponsavel`, `telresponsavel`) VALUES ('$registroanimal','$nomeanimal','$idadeanimal','$racaanimal','$nomeresponsavel','$telresponsavel')";

$inserir = mysqli_query($conexao, $sql);


?>

<link rel="stylesheet" href="css/bootstrap.css">

<div class="container" style="width: 450px; margin-top: 20px">
	<center>

	<h4>Cadastro Concluido</h4>

	<div style="padding-top: 20px">

		<a href="index.php" role= "button" class="btn btn-sm btn-primary">Cadastrar Novamente</a>

	</center>
	
	</div>
</div>