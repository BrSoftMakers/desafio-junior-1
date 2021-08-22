<?php
include "verific.php";

?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>cadastro!</title>
  </head>
  <body>
      <div class="container">
          <div class="row">
              <div class="col">
             <h1>Cadastro do Pet</h1>
                <form action="cadastro_script.php" method="POST">
                    <div class="form-group">
                        <label for="nome">Nome do pet</label>
                        <input type="text" class="form-control" name="nome_pet" required >
                    </div>
                    <div class="form-group">
                        <label for="nome">Espécie do Pet</label>
                        <input type="text" class="form-control" name="especie_pet" required >
                    </div>
                    <div class="form-group">
                        <label for="nome">Raça do pet</label>
                        <input type="text" class="form-control" name="raca_pet" required>
                    </div>
                    <div class="form-group">
                        <label for="nome">Idade do pet</label>
                        <input type="text" class="form-control" name="idade_pet" required>
                    </div>
                    <div class="form-group">
                        <label for="nome">Número de rastreio do pet</label>
                        <input type="text" class="form-control" name="num_rastreio" >
                    </div>
                    <div class="form-group">
                        <label for="nome">Número para Contato</label>
                        <input type="text" class="form-control" name="num_contato" required>
                    </div>
                    <div class="form-group">
                        <label for="nome">Nome do Tutor</label>
                        <input type="text" class="form-control" name="nome_tutor" required>
                    </div><br>
                    <div class="form-group">
                        <input type="submit" class="btn btn-success"  >
                        
                    </div><br>
                    <a href="index1.php" class="btn btn-primary">Página Inicial</a>
                </form>
            
              </div>
          </div>
      </div>
    

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>