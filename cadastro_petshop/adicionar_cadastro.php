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
<body bgcolor="#00008B">

<div class="container" id="tamanhoContainer" style="margin-top: 40px">

	<img src= patacachorro.jpg align="right" >
	<img src= patagato.jpg  align="right">
	

	<h4>Formulário de Cadastro</h4>
	<form action="inserir_dado.php" method="post" style="margin-top: 20px">
		<div class="form-group">
    		<label>Registro do animal</label>
    		<input type="number" class="form-control" name="registroanimal" placeholder="Insira o ID do animal" autocomplete="off" required>
 	 	</div>

 	 	<div class="form-group"style="margin-top: 20px">
    			<label>Nome do animal</label>
    			<input type="text" class="form-control" name="nomeanimal" placeholder="Insira o nome do animal"autocomplete="off"required >
 	 	</div>
 	 	<div class="form-group" style="margin-top: 20px">
    			<label>Idade do animal em meses</label>
    			<input type="number" class="form-control" name="idadeanimal" placeholder="Insira a Idade do animal"autocomplete="off" required>
 	 	</div>

 	 	<div class="form-group"style="margin-top: 20px">
    			<label>Raça do animal</label>
    			<input type="text" class="form-control" name="racaanimal" placeholder="Insira a Raça do animal"autocomplete="off"required >

		<h4 style="margin-top: 20px">Dados do Responsável</h4>
 	 	<div class="form-group">
    			<label>Nome do responsável</label>
    			<input type="text" class="form-control" name="nomeresponsavel" placeholder="Insira o nome do responsável" autocomplete="off" required>
    			<label>Telefone do responsável</label>
    			<input type="tel" class="form-control"	name="telresponsavel" placeholder="Insira o telefone do responsável" autocomplete="off" required>
 	 	</div>

 	<div style="text-align: right;">
 		<a href="index.php" role="button" class="btn btn-sm btn-primary">Voltar</a>
 	 	<button type="submit" id="botao" class="btn btn-sm">Cadastrar</button>
 	 </div>
	</form>
</div>




<script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>