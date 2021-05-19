@extends('layout.layout')

@section('titulo', 'Listar Pets')
@section('conteudo')


<main class="container">
  
  @empty($resultados[0])
  <div class="container py-4">
    <h4>Não há registros com essas especificações</h4>
  </div>
  @endempty
  @isset($resultados[0])
  <div class="table-responsive">
    <table class="table table-bordered table-striped mt-3 table-sm">
      <thead class="text-center">
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Idade</th>
          <th scope="col">Raça</th>
          <th scope="col">Tipo</th>
          <th scope="col">Dono</th>
          <th scope="col">Telefone</th>
        </tr>
      </thead>
      <tbody class="text-center">
        @foreach ($resultados as $resultado)      
        <tr>
          <td>{{ $resultado->nome }}</td>
          <td>{{ $resultado->idade }}</td>
          <td>{{ $resultado->raca }}</td>
          <td>{{ $resultado->tipo }}</td>
          <td>{{ $resultado->dono }}</td>
          <td class="telefone">{{ $resultado->telefone }}</td>
          
          
        </tr>
        @endforeach
        <div class="py-3">
        <a href="{{route('site.index')}}" class="btn btn-outline-info btn-sm mg-2">Voltar</a>
      </div>
      </tbody>
    </table>
  </div>
  @endisset
  
  
  
</main>

@endsection