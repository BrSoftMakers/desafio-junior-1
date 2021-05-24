<?php 

include 'conexao.php';

$id = $_POST['id'];
$nomeanimal = $_POST['nomeanimal'];
$idadeanimal = $_POST['idadeanimal'];
$racaanimal = $_POST['racaanimal'];
$nomeresponsavel = $_POST['nomeresponsavel'];
$telresponsavel = $_POST['telresponsavel']; 

$sql = "UPDATE `petshop` SET `nomeanimal`='$nomeanimal',`idadeanimal`='$idadeanimal',`racaanimal`='$racaanimal',`nomeresponsavel`='$nomeresponsavel',`telresponsavel`='$telresponsavel' WHERE id_petshop = $id";

 $atualizar = mysqli_query($conexao, $sql);


?>

<link rel="stylesheet" href="css/bootstrap.css">

<div class="container" style="width: 400px">
	<center>
		<h3>Atualizado com sucesso</h3>
			<div style="margin-top: 10px"></div>
				<a href="listar_cadastro.php" class="btn btn-sm btn-warning">Voltar</a>
	</center>
</div>