<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adicionar pet</title>
  <link rel="stylesheet" href="<?php echo asset('css/base/base.css')?>" type="text/css">
  <link rel="stylesheet" href="<?php echo asset('css/style.css')?>" type="text/css">
</head>
<body>
  <header class="cabecalho">
    <img src="<?php echo asset('img/logo.svg') ?>" alt="Logo do petshop" class="cabecalho__logo">
    <h1 class="cabecalho__titulo">Petshop</h1>
  </header>

  @yield('conteudo')

  <script src="<?php echo asset('js/validacao.js') ?>"></script>
</body>
</html>