<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <title>Petshop</title>
</head>
<body>
<div class="container">
    <div class="row">
        <?php
        include "conexao.php";

        $id = $_POST['id'];
        $petName = $_POST['petName'];
        $tutorName = $_POST['tutorName'];
        $tutorContact = $_POST['tutorContact'];
        $petAge = $_POST['petAge'];
        $petType = $_POST['petType'];
        $petBreed = $_POST['petBreed'];

        $sql = "UPDATE pets SET petName = '$petName', tutorName = '$tutorName', tutorContact = '$tutorContact', petAge = '$petAge', petType = '$petType',petBreed= '$petBreed' WHERE id='$id'";

        if ($conn->query($sql) === TRUE) {
            echo "Parabéns, atualizado com sucesso!";
        } else {
            echo "Error: " . $conn->error;
        }

        $conn->close();

        ?>
        <a href="index.php" class="btn btn-primary button">Inicio</a>
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

