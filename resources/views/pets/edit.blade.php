@extends('layout')
@section('conteudo')
  <main>
    <section class="form-container">
      <h2 class="form__titulo">Editar o {{ $pet->nome }}</h2>
      <form action="{{ route('editar_pet', ['id' => $pet->id]) }}" method="POST" class="formulario">
        @csrf
        <div class="form__wrapper">
          <label classs="form__label" for="nome">Nome:</label>
          <input class="form__input" type="text" name="nome" id="nome" value="{{ $pet->nome }}" required placeholder="Nome do pet" aria-label="Nome do seu pet">
        </div>
        <div class="form__wrapper">
          <label classs="form__label" for="idade">Idade:</label>
          <input class="form__input" type="number" name="idade" id="idade" value="{{ $pet->idade }}" required placeholder="Idade do seu pet" aria-label="Idade do seu pet">
        </div>
        <div class="form__wrapper">
          <label classs="form__label" for="animal">Gato ou Cachorro:</label>
          <input class="form__input" type="text" name="animal" id="animal" value="{{ $pet->animal }}" required placeholder="Qual é o seu pet?" aria-label="Qual é o seu animalzinho?" minlength="4">
        </div>
        <div class="form__wrapper">
          <label classs="form__label" for="raca">Raça:</label>
          <input class="form__input" type="text" name="raca" id="raca" value="{{ $pet->raca }}" required placeholder="Qual a raça?" aria-label="Raça do seu pet">
        </div>
        <div class="form__wrapper">
          <label classs="form__label" for="nomeDono">Nome do Dono:</label>
          <input class="form__input" type="text" name="nomeDono" id="nomeDono" value="{{ $pet->nomeDono }}" required placeholder="Seu nome" aria-label="Nome do dono do pet">
        </div>
        <div class="form__wrapper">
          <label classs="form__label" for="telefone">Telefone:</label>
          <input class="form__input" type="tell" name="telefone" id="telefone" value="{{ $pet->telefone }}" required placeholder="(xx) x xxxx-xxxx" aria-label="Telefone para contato">
        </div>
        <button class="form__botao">Editar</button>
      </form>
    </section>
    <section>

    </section>
  </main>
@endsection