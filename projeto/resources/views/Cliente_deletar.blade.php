<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Tela cadastro</title>
</head>
<body>
        <h3 class="text-center">Sistema de gestão de cliníca veterinária</h3><br>
        <h4 class="text-center">Página de exclusão dos dados do cliente {{$cliente->nome_dono}}</h4><br>
        <h4 class="text-center">Confirme os dados antes da exclusão:</h4><br>
        <div class="text-center">
<form action="{{route('apagar', ['id'=>$cliente->id])  }}" method="POST">
        @csrf
        <label for="">Nome Animal</label> <br>
        <label><strong>{{$cliente->nome_animal}}</strong></label>
        <br>
        <label for="">Idade</label> <br>
        <label><strong>{{$cliente->nome_dono}}</strong></label>
        <br>
        
        <br>
        <button class="btn-primary">Deletar</button>
</form>
      <div>
</body>
</html>

