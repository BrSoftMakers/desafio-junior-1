<?php
require_once 'ControllerPet.php';
$cPet = new ControllerPet("whaspets", "localhost", "root", "");
$content = $cPet->getPets();
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


    <main class="main-relatorio">
    <header id="#header">
        <span id="logo"></span>


      </header>

      <section id="relatorio">
        <div class="container">

        <div class="title-relatorio">
          <div class="txt-title-relatorio">

            <h1> Pets Cadastrados<a href="index.html">
            <img src="assets/image/bt-home.svg" alt="" srcset="">
          </a> </h1>
           
          </div>
        <br>
        <hr>

<!-- --------php------------------------------------ -->
 <?php

if (isset($_GET['id_up'])) {
  $idPet = addslashes($_GET['id_up']);
  $cPet->setDateUp($idPet);
  header("location: atualizar.php"); //atualizar a página
}


if (isset($_GET['id'])) {
    $idPet = addslashes($_GET['id']);
    $cPet->deletePet($idPet);
    header("location: relatorio.php"); //atualizar a página
}

for ($i = 0; $i < count($content); $i++) {

    echo "<br>";
    echo "ID: ";
    print_r($content[$i]['id']);
    echo "<br>";

    echo "Nome: ";
    print_r($content[$i]['nome']);
    echo "<br>";

    echo "Tipo: ";
    print_r($content[$i]['tipo']);
    echo "<br>";

    echo "Raça: ";
    print_r($content[$i]['raca']);
    echo "<br>";

    echo "Idade: ";
    print_r($content[$i]['idade']);
    echo "<br>";

    echo "Tutor(a) :";
    print_r($content[$i]['nome_tutor']);
    echo "<br>";

    echo "<br>";
    ?>
    <div class="option-crud">
      <a href="atualizar.php?id_up=<?php echo $content[$i]['id']; ?>" >Editar</a>
      <a href="relatorio.php?id=<?php echo $content[$i]['id']; ?>" >Excluir</a>
    </div>
    <br>
    <?php
echo "<hr>";
}
?>
        </div>
      </section>
    </main>

    <footer>&copy; Nilson José</footer>
    <script src="assets/scripts/main.js"></script>
  </body>
</html>
