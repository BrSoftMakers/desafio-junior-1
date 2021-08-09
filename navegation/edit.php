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

    <title>.:ALTERARA CADASTRO:.</title>
</head>
<body>
<?php
include "conexao.php";

$id = $_GET['id'] ?? '';

$sql = "SELECT * FROM pets WHERE id = $id";
$dados = mysqli_query($conn, $sql);
$linha = mysqli_fetch_assoc($dados);
?>
<!----HEADER---->
<<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
<div id="slider">
    <div class="container" id="div-text">
        <div class="row">
            <div class="col">
                <h2>Alterar Cadastro</h2>
                <form action="edit_script.php" method="POST">
                    <div class="form-group">
                        <label for="petName">Nome do pet</label>
                        <input type="text" class="form-control" name="petName" value="<?php echo $linha['petName']; ?>">
                    </div>
                    <div class="form-group">
                        <label for="tutorName">Nome do dono</label>
                        <input type="text" class="form-control" name="tutorName"
                               value="<?php echo $linha['tutorName']; ?>">
                    </div>
                    <div class="form-group">
                        <label for="tutorContact">Contato</label>
                        <input type="text" class="form-control" name="tutorContact"
                               value="<?php echo $linha['tutorContact']; ?>">
                    </div>
                    <div class="form-group">
                        <label for="petAge">Idade do Pet</label>
                        <input type="text" class="form-control" name="petAge" value="<?php echo $linha['petAge']; ?>">
                    </div>
                    <div class="form-group">
                        <label for="petType">Cachorro ou gato?</label>
                        <input type="text" class="form-control" name="petType" value="<?php echo $linha['petType']; ?>">
                    </div>
                    <div class="form-group">
                        <label for="petBreed">Raça</label>
                        <input type="text" class="form-control" name="petBreed"
                               value="<?php echo $linha['petBreed']; ?>">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Salver Alterações">
                    <input type="hidden" name="id" value="<?php echo $linha['id']; ?>">
                </form>
                <a href="../navegation/consulta.php" class="btn btn-info">Voltar</a>
            </div>
        </div>
    </div>
</div>
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