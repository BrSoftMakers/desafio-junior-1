<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
include ("conexao.php");
$id =  filter_input(INPUT_GET,'id');

$resultpet_1="DELETE FROM pet_1 WHERE cod_pet = $id";
$resultadopet_1= mysqli_query($conn,$resultpet_1);
 echo "<h3>Registro Apagado Com Sucesso!</h3>";
?>
<a type="button" class="btn btn-primary" href="index1.php">Voltar</a>
</body>
</html>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

   