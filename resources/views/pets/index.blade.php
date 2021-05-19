@extends('layout')
@section('conteudo')
  <main>
    <section class="tabela-container">
      @if(!empty($mensagem))
      <h2 style="font-size:1.5rem;color:green;margin-top:2rem;">{{$mensagem}}</h2>
      @endif
      <table class="tabela">
        <tr class="tabela__header">
          <th class="tabela__coluna">Nome do pet</th>
          <th class="tabela__coluna">Nome do Dono</th>
          <th class="tabela__coluna">View / Edit / Delet</th>
        </tr>
        @foreach($pets as $pet)
        <tr class="tabela__linhas">
          <td class="tabela__coluna">{{ $pet->nome }}</td>
          <td class="tabela__coluna">{{ $pet->nomeDono }}</td>
          <td class="tabela__coluna">
            <a href="{{ route('ver_pet', ['id' => $pet->id]) }}"><img src="<?php echo asset('img/icons/view.svg')?>" alt="ver" class="tabela__icone-acao"></a>
            <a href="{{ route('editar_pet', ['id' => $pet->id]) }}"><img src="<?php echo asset('img/icons/edit.svg')?>" alt="editar" class="tabela__icone-acao"></a>
            <form action="{{ route('deletar_pet', ['id' => $pet->id]) }}" method="POST">
              @CSRF
              <button class="tabela__botao-deletar"><img src="<?php echo asset('img/icons/delet.svg')?>" alt="" class="tabela__icone-acao"></button>
            </form>
          </td>
        </tr>
        @endforeach
      </table>
      <button class="form__botao"><a href="{{ route('adicionar_pet') }}">Adicionar Pet</a></button>
    </section>
  </main>
@endsection