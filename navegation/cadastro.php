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

    <title>.:CADASTRO:.</title>
</head>
<body>
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
<!---SLIDER---->
<div>
    <div class="container">
        <div class="row">
            <div id="div-text" class="col">
                <h2>Cadastro</h2>
                <form action="cadastro_script.php" method="POST">
                    <div class="form-group">
                        <label for="petName">Nome do pet</label>
                        <input type="text" class="form-control" name="petName">
                    </div>
                    <div class="form-group">
                        <label for="tutorName">Nome do dono</label>
                        <input type="text" class="form-control" name="tutorName">
                    </div>
                    <div class="form-group">
                        <label for="tutorContact">Contato</label>
                        <input type="text" class="form-control" name="tutorContact">
                    </div>
                    <div class="form-group">
                        <label for="petAge">Idade do Pet</label>
                        <input type="text" class="form-control" name="petAge">
                    </div>
                    <div class="form-group">
                        <label for="petType">Cachorro ou gato?</label>
                        <input type="text" class="form-control" name="petType">
                    </div>
                    <div class="form-group">
                        <label for="petBreed">Raça</label>
                        <input type="text" class="form-control" name="petBreed">
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
                <a href="../index.php" class="btn btn-info">Voltar</a>
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