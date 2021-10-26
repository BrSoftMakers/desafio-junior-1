<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

 <!-- BOOTSTRAP -->
 <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>

  <title>Petshop - Exclusão de Cadastro</title>
</head>
<body>
  <div class="container">
      <div class="row">
          <?php

          include "conexao.php";
          $id = $_POST['id'];
          $nome = $_POST['nome'];

          $sql = "DELETE from `animals` WHERE cod_animal = $id";


          if(mysqli_query($conn, $sql)){
              mensage(" $nome Excluído com Sucesso!", 'success');
          }else
            mensage(" $nome Não foi Excluído! ", 'danger');

          ?>
          <a href="adotar.php" class="btn btn-primary btn-sm">Voltar</a>
      </div>
  </div>
</div>
</body>
</html>