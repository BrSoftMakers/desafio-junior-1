<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/custom.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&display=swap" rel="stylesheet">

    <title>.:Consulta:.</title>
</head>

<body>
<?php

if (isset($_POST['busca'])) {
    $pesquisa = $_POST['busca'];
} else {
    $pesquisa = "";
}
include "conexao.php";

$sql = "SELECT * FROM pets WHERE tutorName LIKE '%$pesquisa%'";
$dados = mysqli_query($conn, $sql);
?>
<!----HEADER---->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid ">
        <a class="navbar-brand" href="../index.php">MyPetshop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                <a class="nav-link" href="#">Sobre nós</a>
                <a class="nav-link" href="#">Entre em contato</a>
            </div>
        </div>
    </div>
</nav>
<!----HEADER---->

<div id="div-text" class="container">
    <div class="row">
        <div class="col">
            <h1>Pesquisa</h1>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex" action="consulta.php" method="POST">
                        <input class="form-control me-2" type="search" placeholder="Digite o nome do tutor!"
                               aria-label="Search" name="busca" autofocus>
                        <button class="btn btn-outline-success" type="submit">AuAu!</button>
                    </form>
                </div>
            </nav>

            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Nome do Dono</th>
                    <th scope="col">Nome do Pet</th>
                    <th scope="col">Contato do Dono</th>
                    <th scope="col">Idade do Pet</th>
                    <th scope="col">Tipo do Pet</th>
                    <th scope="col">Raça do Pet</th>
                    <th scope="col">Editar/Excluir</th>

                </tr>
                </thead>
                <tbody>
                <?php
                while ($linha = mysqli_fetch_assoc($dados)) {
                    $id = $linha['id'];
                    $tutorName = $linha['tutorName'];
                    $petName = $linha['petName'];
                    $tutorContact = $linha['tutorContact'];
                    $petAge = $linha['petAge'];
                    $petType = $linha['petType'];
                    $petBreed = $linha['petBreed'];


                    echo "<tr>
                            <th scope='row'>$tutorName</th>
                            <td>$petName</td>
                            <td>$tutorContact</td>
                            <td>$petAge</td>
                            <td>$petType</td>
                            <td> $petBreed</td>
                            <td width=150px> 
                                <a href='edit.php?id=$id' class='btn btn-success btn-sm'>Editar</a>
                                <a href='#' class='btn btn-danger btn-sm' data-bs-toggle='modal' data-bs-target='#confirma'
                                onclick=" . '"' . "get_data($id, '$petName')" . '"' . ">Excluir</a>
                            </td>
                            </tr>";
                }
                ?>

                </tbody>
            </table>

            <a href="../index.php" class="btn btn-info">Voltar</a>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="confirma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Deseja realmente exculir?</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="excluir_script.php" method="POST">
                    <p>Deseja realmente excluir</p>
                    <b id="petName">Nome da pessoa</b>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                <input type="hidden" name="id" id="id_pet" value="">
                <input type="hidden" name="petName" id="petName_2" value="">
                <input type="submit" type="button" class="btn btn-danger" value="Sim">
                </form>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    function get_data(id, petName) {
        document.getElementById('petName').innerHTML = petName;
        document.getElementById('id_pet').value = id;
        document.getElementById('petName_2').value = petName;
    }
</script>
<!-- Optional JavaScript; choose one of the two! -->

<!-- Option 1: Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

<!-- Option 2: Separate Popper and Bootstrap JS -->
<!--
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
-->
</body>
</html>
