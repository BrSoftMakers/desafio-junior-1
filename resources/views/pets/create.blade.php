@extends('layout')
@section('conteudo')
  <main>
    <section class="form-container">
      <h2 class="form__titulo">Adicionar pet</h2>
      <form action="{{ route('adicionar_pet') }}" method="POST" class="form">
        @csrf
        <div class="form__wrapper">
          <label classs="form__label" for="nome">Nome:</label>
          <input class="form__input" type="text" name="nome" id="nome" required placeholder="Nome do pet" aria-label="Nome do seu pet" minlength="2">
        </div>
        <div class="form__wrapper">
          <label classs="form__label" for="idade">Idade:</label>
          <input class="form__input" type="number" name="idade" id="idade" required placeholder="Idade do seu pet" aria-label="Idade do seu pet">
        </div>
        <div class="form__wrapper">
          <label classs="form__label" for="animal">Gato ou Cachorro:</label>
          <input class="form__input" type="text" name="animal" id="animal" required placeholder="Qual é o seu pet?" aria-label="Qual é o seu animalzinho?" minlength="4">
        </div>
        <div class="form__wrapper">
          <label classs="form__label" for="raca">Raça:</label>
          <input class="form__input" type="text" name="raca" id="raca" required placeholder="Qual a raça?" aria-label="Raça do seu pet" minlength="2">
        </div>
        <div class="form__wrapper">
          <label classs="form__label" for="nomeDono">Nome do Dono:</label>
          <input class="form__input" type="text" name="nomeDono" id="nomeDono" required placeholder="Seu nome" aria-label="Nome do dono do pet" minlength="2">
        </div>
        <div class="form__wrapper">
          <label classs="form__label" for="telefone">Telefone:</label>
          <input class="form__input" type="tell" name="telefone" id="telefone" required placeholder="(xx) x xxxx-xxxx" aria-label="Telefone para contato">
        </div>
        <button class="form__botao">Adicionar</button>
      </form>
      <a href="{{ route('lista_pets') }}" class="form__botao-lista">Ver lista</a>
    </section>
  </main>
@endsection