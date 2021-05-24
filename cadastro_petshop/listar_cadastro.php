<!DOCTYPE html>
<html>
<head>
	<title>Listagem de Cadastros</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<script src="https://kit.fontawesome.com/317d275eb6.js" crossorigin="anonymous"></script>
</head>
<body bgcolor="#00008B">
<div class="container" style="margin-top: 40px">
<h3>Lista de Cadastros</h3>
<br>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Registro do Animal</th>
      <th scope="col">Nome do Animal</th>
      <th scope="col">Idade do Animal em meses</th>
      <th scope="col">Raça do animal</th>
      <th scope="col">Nome do Responsável</th>
      <th scope="col">Telefone do Responsável</th>
      <th scope="col">Ação</th>
    </tr>
  </thead>
    	<?php 
    		include 'conexao.php';
    		$sql = "SELECT * FROM `petshop`";
    		$busca = mysqli_query($conexao, $sql);

    		while($array = mysqli_fetch_array($busca)){

    			$id_petshop = $array['id_petshop'];
    			$registroanimal = $array['registroanimal'];
    			$nomeanimal = $array['nomeanimal'];
    			$idadeanimal = $array['idadeanimal'];
    			$racaanimal = $array['racaanimal'];
    			$nomeresponsavel = $array['nomeresponsavel'];
    			$telresponsavel = $array['telresponsavel']; 
    	?>
  <tr>
      <td><?php echo $registroanimal ?></td>
      <td><?php echo $nomeanimal ?></td>
      <td><?php echo $idadeanimal ?></td>
      <td><?php echo $racaanimal ?></td>
      <td><?php echo $nomeresponsavel ?></td>
      <td><?php echo $telresponsavel ?></td>
      <td><a href="editar_cadastro.php?id=<?php echo $id_petshop ?>" class="btn btn-warning btn-sm" role="button"><i class="fas fa-edit"></i>&nbsp;Editar</a>
          <a href="deletar_cadastro.php?id=<?php echo $id_petshop ?>" class="btn btn-danger btn-sm" role="button"><i class="fas fa-trash-alt"></i>&nbsp;Excluir</a>
      </td>
<?php } ?>
    </tr>
</table>

  <div style="text-align: right;">
      <a href="index.php" role="button" class="btn btn-sm btn-primary">Voltar</a>
  </div>

</div>


<script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>