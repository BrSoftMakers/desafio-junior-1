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
        <h4 class="text-center">Página de ediçao do cliente {{$cliente->nome_dono}}</h4><br>
<div class="text-center">        
<form action="{{route('editar', ['id'=>$cliente->id])  }}" method="POST">
        @csrf
        <label for="">Nome do animal</label> <br>
        <input type="text" name="nome_animal" value="{{$cliente->nome_animal}}"/>
        <br>
        <label for="">Idade</label> <br>
        <input type="number" name="idade" value="{{$cliente->idade}}" />
        <br>
        <label for="">Tipo</label> <br>
        <input type="text" name="tipo" value="{{$cliente->tipo}}"/>
        <br>
        <label for="">Raça</label> <br>
        <input type="text" name="raca" value="{{$cliente->raca}}"/>
        <br>
        <label for="">Nome do dono</label> <br>
        <input type="text" name="nome_dono" value="{{$cliente->nome_dono}}"/>
        <br>
        <label for="">Telefone para contato</label> <br>
        <input type="text" name="telefone_dono" value="{{$cliente->telefone_dono}}"/>
        <br><br>
        <button class="btn-primary">Atualizar</button>
</form>
</div>
</body>
</html>

