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
    <section class="container">
        <?php include_once("componente/bnt.html"); ?>
        <h1 id="title-cliente">Cadastrar Cliente</h1>
        <form id="create-form" action="<?= $BASE_URL ?>config/process.php" method="POST">
            <input type="hidden" name="type" value="create">
            <div class="form-group">
                <label for="name">Nome do cliente:</label>
                <input type="text" name="name" class="form-control" id="name" placeholder="Nome" required="required">
            </div>

            <div class="form-group">
                <label for="phone">Número pra contato:</label>
                <input type="text" name="phone" class="form-control" id="phone" placeholder="Telefone" required="required">
            </div>

            <div class="form-group">
                <label for="namepet">Nome do pet:</label>
                <input type="text" name="pet" class="form-control" id="namepet" placeholder="Pet" required="required">
            </div>

            <div class="form-group">
                <label for="nameraca">Raça do pet:</label>
                <input type="text" name="raca" class="form-control" id="nameraca" placeholder="Raça" required="required">
            </div>

            <div class="form-group">
                <label for="idade">Idade do pet:</label>
                <input type="text" name="idade" class="form-control" id="idade" placeholder="Idade" required="required">
            </div>

            <div class="form-group">
                <label for="tipo">Tipo de pet:</label>
                <input type="text" name="tipo" class="form-control" id="tipo" placeholder="Tipo" required="required">
            </div>

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </section>  
</body>
</html>