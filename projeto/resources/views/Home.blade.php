<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Home</title>
</head>
<body>
        <h3 class="text-center">Sistema de gestão de cliníca veterinária</h3><br>
        <h4 class="text-center">Tabela de todos os animais cadastrados</h4><br>
        <a href="/cadastrar/novo"><button type="button" class="btn btn-primary btn-lg">Cadastrar novo cliente.</button><a><br><br>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nome do animal</th>
      <th scope="col">Idade</th>
      <th scope="col">Tipo</th>
      <th scope="col">Raça</th>
      <th scope="col">Nome do dono</th>
      <th scope="col">Telefone do dono</th>
      <th scope="col">Ação</th>
    </tr>
  </thead>
  <tbody>
  @foreach($cliente as $client) 
   <tr>
      <td>{{ $client->id }}</td>
      <td>{{ $client->nome_animal }}</td>
      <td>{{ $client->idade }}</td>
      <td>{{ $client->tipo }}</td>
      <td>{{ $client->raca }}</td>
      <td>{{ $client->nome_dono }}</td>
      <td>{{ $client->telefone_dono }}</td>    
      <td>
      <a href="/cliente/editar/{{$client->id}}" class="btn btn-primary">Editar</a>
      <a href="/cliente/excluir/{{$client->id}}" class="btn btn-danger">Excluir</a>
      <a href="/listar/{{$client->id}}" class="btn btn-secondary">Detalhar</a>
     </td>
    </tr>
@endforeach
  </tbody>
</table>
<div class="text-center">
<a href="{{$cliente->nextPageUrl()}}"><button class="btn btn-dark">Próxima</button></a>
<a href="{{$cliente->previousPageUrl()}}"><button class="btn btn-dark">Anterior</button></a>
</div>



      
</body>
</html>

