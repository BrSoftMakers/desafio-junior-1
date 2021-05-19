@extends('layout')
@section('conteudo')
  <main class="delet__container">
    <h2 class="delet__informe">O pet ({{ $pet->nome }}) foi deletado</h2>
    <a href="{{ route('lista_pets') }}" class="delet__botao-voltar">Voltar</a>
  </main>
@endsection