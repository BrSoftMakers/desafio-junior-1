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
        <h4 class="text-center">Informações do cliente {{$cliente->nome_dono}}</h4><br>
    <div class="text-center">
        <label for="">Nome do Animal</label> <br>
        <label>{{$cliente->nome_animal}}</label><br>
        <br>
        <label for="">Idade</label> <br>
        <label>{{$cliente->idade}}</label><br>
        <br>
        <label for="">Tipo</label> <br>
        <label>{{$cliente->tipo}}</label><br>
        <br>
        <label for="">raça</label> <br>
        <label>{{$cliente->raca}}</label><br>
        <br>
        <label for="">Nome do Dono</label> <br>
        <label>{{$cliente->nome_dono}}</label><br>
        <br>
        <label for="">Telefone para contato</label> <br>
        <label>{{$cliente->telefone_dono}}</label><br>
        <br>
        <br>
        <label for="">Data do cadastro</label> <br>
        <label><strong>{{$cliente->created_at}}</strong></label><br>
        <br>
    </div> 
      
</body>
</html>

