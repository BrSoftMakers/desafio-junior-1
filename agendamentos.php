<?php
require_once 'ControllerPet.php';
$cPet = new ControllerPet("whaspets", "localhost", "root", "");
$content = $cPet->getAgendamentos();
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


        <h1> Serviços Agendados<a href="index.html">
            <img src="assets/image/bt-home.svg" alt="" srcset="">
          </a> </h1>
        <br>
        <hr>

<!-- --------php------------------------------------ -->
 <?php

// SELECT a.id , a.id_pet, p.nome, a.dia, a.servico FROM `agendamento` as a, `pet` as p  WHERE a.id_pet = p.id; ORDER BY a.dia");

if (isset($_GET['id'])) {
    $idPet = addslashes($_GET['id']);
    $cPet->deleteAgendamento($idPet);
    header("location: agendamentos.php"); //atualizar a página
}

for ($i = 0; $i < count($content); $i++) {
  
    echo "<br>";
    echo "ID do Agendamento: ";
    print_r($content[$i]['id']);
    echo "<br>";

    echo "ID do Pet: ";
    print_r($content[$i]['id_pet']);
    echo "<br>";

    echo "Nome do Pet: ";
    print_r($content[$i]['nome']);
    echo "<br>";

    echo "Data: ";
    print_r($content[$i]['dia']);
    echo "<br>";

    echo "Horário: ";
    print_r($content[$i]['hora']);
    echo "<br>";

    echo "Serviço :";
    print_r($content[$i]['servico']);
    echo "<br>";

    echo "<br>";
    ?>
    <div class="option-crud">
      <a href="agendamentos.php?id=<?php echo $content[$i]['id']; ?>" >Excluir</a>
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
