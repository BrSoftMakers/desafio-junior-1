<?php

    include_once("config/url.php");  
    include_once("config/process.php"); 

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">    
    <meta name="robots" content="index, follow">
    <meta name="author" content="Marcos Willian">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="">
    <meta name="keywords" content="pet, petshop, animal, saude animal, bem estar, bicho de estimação ">
    <title>Four Paws</title>
    <link rel="shortcut icon" href="assets/img/petshop.png" type="image/x-icon" />
    <!--GOOGLE FONTS-->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet">
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css" integrity="sha512-oc9+XSs1H243/FRN9Rw62Fn8EtxjEYWHXRvjS43YtueEewbS6ObfXcJNyohjHqVKFPoXXUxwc+q1K7Dee6vv9g==" crossorigin="anonymous" />
    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <!-- CSS -->
    <link rel="stylesheet" href="<?= $BASE_URL ?>css/styles.css">
</head>
<body class="background">
    <header>
        <nav class="navbar-expand-lg navbar-dark bg-secondary">
            <a class="navbar-brand" href="<?= $BASE_URL ?>index.php">
                <img src="<?= $BASE_URL ?>img/petshop.png" alt="Logo pet shop">
            </a>
            <div>
                <ul class="navbar-nav">
                    <li>
                        <a class="nav-link active" id="home-link" href="<?= $BASE_URL ?>index.php">Home</a>
                    </li>
                    <li>
                        <a class="nav-link active" href="<?= $BASE_URL ?>create.php">Cadastrar</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <section class="container" id="view-cadastro">
        <?php include_once("componente/bnt.html"); ?>

        <h1 id="title-cliente"><?= $contact["name"] ?></h1>

        <p class="bold">Telefone:</p>
        <p><?= $contact["phone"] ?></p>

        <p class="bold">Nome do Pet:</p>
        <p><?= $contact["pet"] ?></p>

        <p class="bold">Raça:</p>
        <p><?= $contact["raca"] ?></p>

        <p class="bold">Idade do Pet:</p>
        <p><?= $contact["idade"] ?></p>

        <p class="bold">Tipo:</p>
        <p><?= $contact["tipo"] ?></p>

    </section>
</body>
</html>