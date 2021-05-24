<?php 

include 'conexao.php';

$id = $_GET['id'];


?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<title>Cadastro Pet-Shop</title>
	<link rel="stylesheet" href="css/bootstrap.css">

	<style type="text/css">

		#tamanhoContainer {
			width: 500px;
		}
		#botao{
			background-color: #FB6F24;
			color: #ffffff;
			font-weight: bold;
		}
		img{
   			width: 70px;
   			height: 70px;
		}
	</style>

</head>
<body>

<div class="container" id="tamanhoContainer" style="margin-top: 40px">

	<img src= patacachorro.jpg align="right" >
	<img src= patagato.jpg  align="right">
	

	<h4>Formulário de Cadastro</h4>
	<form action="_atualizar_cadastro.php" method="post" style="margin-top: 20px">
		<?php 

		$sql = "SELECT * FROM `petshop` WHERE id_petshop = $id ";
		$buscar = mysqli_query($conexao, $sql);
		while ($array = mysqli_fetch_array($buscar)){

			    $id_petshop = $array['id_petshop'];
    			$registroanimal = $array['registroanimal'];
    			$nomeanimal = $array['nomeanimal'];
    			$idadeanimal = $array['idadeanimal'];
    			$racaanimal = $array['racaanimal'];
    			$nomeresponsavel = $array['nomeresponsavel'];
    			$telresponsavel = $array['telresponsavel']; 


		?>
		<div class="form-group">
    		<label>Registro do animal</label>
    		<input type="number" class="form-control" name="registroanimal" value="<?php echo $registroanimal ?>" disabled>
    		<input type="number" class="form-control" name="id" value="<?php echo $id ?>" style="display: none">
 	 	</div>

 	 	<div class="form-group"style="margin-top: 20px">
    			<label>Nome do animal</label>
    			<input type="text" class="form-control" name="nomeanimal" value="<?php echo $nomeanimal ?>"autocomplete="off">
 	 	</div>
 	 	<div class="form-group" style="margin-top: 20px">
    			<label>Idade do animal em meses</label>
    			<input type="number" class="form-control" name="idadeanimal" value="<?php echo $idadeanimal ?>"autocomplete="off">
 	 	</div>

 	 	<div class="form-group"style="margin-top: 20px">
    			<label>Raça do animal</label>
    			<input type="text" class="form-control" name="racaanimal" value="<?php echo $racaanimal ?>" autocomplete="off"required >

	

		<h4 style="margin-top: 20px">Dados do Responsável</h4>
 	 	<div class="form-group">
    			<label>Nome do responsável</label>
    			<input type="text" class="form-control" name="nomeresponsavel" value="<?php echo $nomeresponsavel ?>"autocomplete="off">
    			<label>Telefone do responsável</label>
    			<input type="tel" class="form-control"	name="telresponsavel" value="<?php echo $telresponsavel ?>"autocomplete="off">
 	 	</div>

 	<div style="text-align: right;">
 	 	<button type="submit" id="botao" class="btn btn-sm">Atualizar</button>
 	 </div>
 	<?php } ?>

	</form>
</div>




<script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>