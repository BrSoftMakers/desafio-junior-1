@extends('layout')
@section('conteudo')
  <main class="tabela-container">
    <table class="tabela">
      <tr class="tabela__header">
        <th class="tabela__coluna">Nome do pet</th>
        <th class="tabela__coluna">Idade</th>
        <th class="tabela__coluna">Gato/Cachorro</th>
        <th class="tabela__coluna">Raça</th>
        <th class="tabela__coluna">Nome do Dono</th>
        <th class="tabela__coluna">Telefone</th>
        <th class="tabela__coluna">Ferramentas</th>
      </tr>
      <tr class="tabela__linhas">
        <td class="tabela__coluna">{{ $pet->nome }}</td>
        <td class="tabela__coluna">{{ $pet->idade }}</td>
        <td class="tabela__coluna">{{ $pet->animal }}</td>
        <td class="tabela__coluna">{{ $pet->raca }}</td>
        <td class="tabela__coluna">{{ $pet->nomeDono }}</td>
        <td class="tabela__coluna">{{ $pet->telefone }}</td>
        <td class="tabela__coluna">
          <a href="{{ route('editar_pet', ['id' => $pet->id]) }}"><img src="<?php echo asset('img/icons/edit.svg')?>" alt="editar" class="tabela__icone-acao"></a>
          <form action="{{ route('deletar_pet', ['id' => $pet->id]) }}" method="POST">
            @CSRF
            <button class="tabela__botao-deletar"><img src="<?php echo asset('img/icons/delet.svg')?>" alt="" class="tabela__icone-acao"></button>
          </form>
        </td>
      </tr>
    </table>
    <button class="botao__voltar"><a href="{{ route('lista_pets') }}"> Voltar </a></button>
  </main>
@endsection