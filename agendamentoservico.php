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
    if (isset($_POST['id_pet'])) {
    $id_pet = addslashes($_POST['id_pet']);
    $dia = addslashes($_POST['dia']);
    $hora = addslashes($_POST['hora']);
    $servico= addslashes($_POST['servico']);



      //verifica se as variavéis obrigatorias estão vazias
      if(!empty($id_pet) && !empty($dia) && !empty($hora) && !empty($servico)){
          
        // addAgendamento($id_pet, $dia, $hora , $servico)

          if($date->addAgendamento($id_pet, $dia, $hora , $servico)){
            echo "<script>alert('SERVIÇO CADASTRADO COM SUCESSO!') </script>";
          
          }else{
            echo "<script>alert('ERRO::') </script>";
            
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
          <form id="form" name="form" action="agendamentoservico.php" method="POST">
            <div class="form-container">
              <label for="id_pet" class="label">ID do Pet:</label>
              <input type="text" class="input" name="id_pet" />
            </div>

            <div class="form-container">
              <label for="dia" class="label">Dia:</label>
              <input name="dia" type="text" id="dia" />
            </div>

            <div class="form-container">
              <label for="hora" class="label">Hora:</label>
              <input type="text" class="input" name="hora"/>
            </div>

            <div class="form-container">
              <label for="servico" class="label">Serviço:</label>
              <input type="text" class="input" name="servico" />
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
