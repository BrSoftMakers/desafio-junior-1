<?php
session_start();
//verificação pra nao pular direto pra o formulário
//formulário extremamente simples sem banco de dados e sem cripto.


if(isset($_POST['usuario'],$_POST['senha'])){ 
        $login = $_POST['usuario'];
        $senha = $_POST['senha'];
    if(($login == "usuario") && ($senha == 123 )){
        $_SESSION['usuario']=$_POST['usuario'];
        header("location:index1.php");
   }else {
       
    header("location:index.php?erro=true");
   }
}else{
  

 

}//mensagem de erro caso tente pular o log, ou senha errada, uma mensagem só!
if(isset($_GET['erro'])){
  $erro="<h3>Erro Login</h3>";
}
   ?>

<div style="background-color:red ; margin :12px">
<?php echo  $erro ?? "" ?>
</div>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <meta name="description" content="">
    <meta name="author" content="Cesar Szpak">
    <link rel="icon" href="imagens/favicon.ico">

    <title>Login</title>


  </head>

  <body>

    <div class="container">
      <form class="form-signin" method="POST" action=" ">
        <h2 class="form-signin-heading">login</h2>
        <label for="inputEmail" class="sr-only">usuário</label>
        <input type="text" name="usuario"  class="form-control" placeholder="usuario" required autofocus>
        <label for="inputPassword" class="sr-only">Senha</label>
        <input type="password" name="senha" id="inputPassword" class="form-control" placeholder="Senha" required><br/>
        <button class="btn btn-lg btn-danger btn-block" type="submit">Acessar</button>
      </form>

<php?


?>

  </body>
</html>
