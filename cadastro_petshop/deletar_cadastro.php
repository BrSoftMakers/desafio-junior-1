<?php 

include 'conexao.php';

$id= $_GET['id'];

$sql = "DELETE FROM `petshop` WHERE id_petshop = $id";
$deletar = mysqli_query($conexao, $sql);

?>

<link rel="stylesheet" href="css/bootstrap.css">

<div class="container" style="width: 400px">
	<center>
		<h3>Deletado com sucesso</h3>
			<div style="margin-top: 10px"></div>
				<a href="listar_cadastro.php" class="btn btn-sm btn-warning">Voltar</a>
	</center>
</div>