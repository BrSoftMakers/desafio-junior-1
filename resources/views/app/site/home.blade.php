@extends('layout.layout')

@section('titulo', 'LovePet - Home')
@section('conteudo')


<main class="container">
  <h1 class="text-center my-3">Pets Cadastrados</h1>
  <a href="{{ route('site.create') }}"  class="btn btn-outline-success btn-sm">Novo Pet</a>
  <div class="table-responsive">
  <table class="table table-striped mt-3 table-bordered table-sm">
    <thead class="text-center">
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Idade</th>
        <th scope="col">Raça</th>
        <th scope="col">Tipo</th>
        <th scope="col">Dono</th>
        <th scope="col">Telefone</th>
        <th scope="col">Ações</th>
        
      </tr>
    </thead>
    <tbody class="text-center">
      @foreach ($pets as $pet)
      
      
      <tr>
        <td>{{ $pet->nome }}</td>
        <td>{{ $pet->idade }}</td>
        <td>{{ $pet->raca }}</td>
        <td>{{ $pet->tipo }}</td>
        <td>{{ $pet->dono }}</td>
        <td class="telefone">{{ $pet->telefone }}</td>
        <td>
          <a href="/editar/{{$pet->id}}"  class="btn btn-sm btn-outline-primary">
            <i class="fas fa-pencil-alt"></i>
          </a>
          <button type="button" data-id="{{$pet->id}}" class="btn btn-sm btn-outline-danger deleteButton">
            <i class="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
      @endforeach
    </tbody>
  </table>
</div>
  {{ $pets->links() }}
</main>

@endsection
