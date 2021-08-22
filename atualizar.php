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
if (isset($_GET['id_up'])) {
    $id_update = addslashes($_GET['id_up']);
}

$res = $date->getPet($id_update);

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
              <input type="text" class="input" name="nome_tutor" value="<?php if (isset($res)) {echo $res['nome_tutor'];}?>" />
            </div>

            <div class="form-container">
              <label for="cpf" class="label">CPF do Tutor:</label>
              <input name="cpf" type="text" id="cpf" value="<?php if (isset($res)) {echo $res['cpf'];}?>"/>
            </div>

            <div class="form-container">
              <label for="telefone" class="label">Telefone:</label>
              <input type="text" class="input" name="telefone" value="<?php if (isset($res)) {echo $res['telefone'];}?>"/>
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
              <input type="text" class="input" name="nome" value="<?php if (isset($res)) {echo $res['nome'];}?>" />
            </div>

            <div class="form-container">
              <label for="raca" class="label">Raça do Pet:</label>
              <input type="text" class="input" name="raca" value="<?php if (isset($res)) {echo $res['raca'];}?>"/>
            </div>

            <div class="form-container">
              <label for="idade" class="label">Idade do Pet:</label>
              <input type="text" class="input" name="idade" value="<?php if (isset($res)) {echo $res['idade'];}?>"/>
            </div>

            <div class="submit-container">
              <div class="button-submit-form">
                <button id="cadastrar" type="submit">Atualizar</button>
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
