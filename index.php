<?php

    include_once("config/url.php");
    include_once("config/process.php");

    //Limpar a mensagem na inicialização
    if(isset($_SESSION['msg'])) {
        $exibeMsg = $_SESSION['msg'];
        $_SESSION['msg'] = '';
    }

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
        <!--Mensagem de sucesso-->
        <?php if (isset($exibeMsg) && $exibeMsg != ''): ?>
            <p id="msg"><?= $exibeMsg ?></p>
        <?php endif; ?>

        <h1 id="title-cliente">Lista de clientes</h1>

        <?php if(count($contacts) > 0): ?>
            <table class="table" id="cadastro-table"> 
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Telefone</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>  
                    <?php foreach($contacts as $contact): ?>     
                        <tr>
                        <td scope="row" class="col-id"><?= $contact["id"] ?></td>
                        <td scope="row"><?= $contact["name"] ?></td>
                        <td scope="row"><?= $contact["phone"] ?></td>
                            <td class="actions">
                            <a href="<?= $BASE_URL ?>read.php?id=<?= $contact["id"] ?>"><i class="fas fa-eye check-icon"></i></a>
                            <a href="<?= $BASE_URL ?>update.php?id=<?= $contact["id"] ?>"><i class="far fa-edit edit-icon"></i></a>
                            <form class="delete-form" action="<?= $BASE_URL ?>config/process.php" method="POST">
                                <input type="hidden" name="type" value="delete">
                                <input type="hidden" name="id" value="<?= $contact["id"] ?>">
                                <button type="submit" class="delete-btn"><i class="fas fa-times delete-icon"></i></button>
                            </form>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p id="lista-vazia">Ainda não há cadastros, <a href="<?= $BASE_URL ?>create.php">Clique aqui para adicionar</a></p>
        <?php endif; ?>
    </section>
    <div class="button-float-whats">
        <a href="https://wa.me/?text=Ola, tudo bem?" target="_blank">Chat</a>        
    </div>
    <footer class="container" id="footer">
        <p>
            &copy; Marcos Willian
        </p>
    </footer>
   <script type="text/javascript" src="js/main.js"></script>
</body>
</html>