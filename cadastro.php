<?php
require_once 'ControllerPet.php';
// addPet($nome_tutor,$id_tutor, $telefone, $tipo, $nome,$raca, $idade
$date = new ControllerPet("whaspets", "localhost", "root", "");

?>


<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="assets/stylesheet/style.css" />
    <title>WashPets</title>
  </head>
  <body>

    <!--------------- php----------------------- -->

    <?php
    if (isset($_POST['cpf'])) {
    $nomeTutor = addslashes($_POST['nome_tutor']);
    $id_tutor = addslashes($_POST['cpf']);
    $telefone = addslashes($_POST['telefone']);

    if($_POST["tipo"]=="felino"){
      $tipo = "felino";
    }else{
      $tipo = "canino";
    }

    // $tipo = addslashes($_POST["tipo"]);
    $nome = addslashes($_POST['nome']);
    $raca = addslashes($_POST['raca']);
    $idade = addslashes($_POST['idade']);

      //verifica se as variavéis obrigatorias estão vazias
      if(!empty($nomeTutor) && !empty($id_tutor) && !empty($telefone) && !empty($tipo)&& !empty($nome)){

        // addPet($nome_tutor,$id_tutor, $telefone, $tipo, $nome,$raca, $idade )

          if($date->addPet($nomeTutor,$id_tutor, $telefone, $tipo, $nome,$raca, $idade )){
            echo "<script>alert('CADASTRADO COM SUCESSO!') </script>";
          
          }else{
            echo "<script>alert('ERRO::PET JÁ CADASTRADO!') </script>";
            
          }
      }else{
        echo "<script>alert('ERRO::PREENCHA TODOS OS CAMPOS!') </script>" ;
      }

    }

?>



    <main class="fixed">
      <header id="#header">
        <span id="logo"></span>
      </header>

      <section id="cadastro">
        <div class="container">
          <form id="form" name="form" action="#cadastro" method="POST">
            <div class="form-container">
              <label for="nome_tutor" class="label">Nome do Tutor:</label>
              <input type="text" class="input" name="nome_tutor" />
            </div>

            <div class="form-container">
              <label for="cpf" class="label">CPF do Tutor:</label>
              <input name="cpf" type="text" id="cpf" />
            </div>

            <div class="form-container">
              <label for="telefone" class="label">Telefone:</label>
              <input type="text" class="input" name="telefone"/>
            </div>

            <div class="form-container radio">
              <label for="tipo" class="label-radio">Tipo:</label>

              <div id="radio">
                <div class="felino">
                  <input
                    type="radio"
                    name="tipo"
                    id="felino"
                    class="input-radio"
                    checked
                  />
                  <label for="felino" class="label-radio">Felino</label>
                </div>

                <div class="canino">
                  <input
                    type="radio"
                    name="tipo"
                    id="canino"
                    class="input-radio"
                  />
                  <label for="canino" class="label">Canino</label>
                </div>
              </div>
            </div>

            <div class="form-container">
              <label for="nome" class="label">Nome do Pet:</label>
              <input type="text" class="input" name="nome" />
            </div>

            <div class="form-container">
              <label for="raca" class="label">Raça do Pet:</label>
              <input type="text" class="input" name="raca"/>
            </div>

            <div class="form-container">
              <label for="idade" class="label">Idade do Pet:</label>
              <input type="text" class="input" name="idade" />
            </div>

            <div class="submit-container">
              <div class="button-submit-form">
                <button id="cadastrar" type="submit">Cadastrar</button>
                <button id="cancelar" type="reset"><a href="index.html">Cancelar</a></button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>

    <footer>&copy; Nilson José</footer>
    <script src="assets/scripts/main.js"></script>
  </body>
</html>
