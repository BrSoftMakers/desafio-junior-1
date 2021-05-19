@extends('layout.layout')

@section('titulo', 'Editar Pet')
@section('conteudo')

<div class="container bg-light">
    <form action="{{route('site.update')}}" class="form-group py-4" method="post">
        
        @csrf
        
        <div class="bg-light">
            <label class="mb-2 h3" for="dados">Dados do pet</label>
        </div>
        <div class="row">
            <div class="form-group col-sm-8">
                <label>Nome</label>
                <input type="text" class="form-control" name="nome" minlength="3" value="{{ $pets[0]->nome }}" maxlength="40" required autofocus placeholder="Nome">
                @if($errors->has('nome'))
                <small class="alert-danger">
                    {{ $errors->first('nome') }}
                </small>
                @endif    
            </div>
            <div class="form-group col-sm-4">
                <label>Tipo</label>
                <select class="form-select" name="tipo" value="{{ $pets[0]->tipo }}" aria-label="Default select example">
                    <option value="">Tipo de Animal</option>
                    <option value="Cachorro" {{ $pets[0]->tipo == 'Cachorro' ? 'selected' : ''}}>Cachorro</option>
                    <option value="Gato" {{ $pets[0]->tipo == 'Gato' ? 'selected' : ''}}>Gato</option>
                </select>
                @if($errors->has('tipo'))
                <small class="alert-danger">
                    {{ $errors->first('tipo') }}
                </small>}
                @endif          
            </div>
        </div>
        <div class="row mt-3" >
            <div class="form-group col-sm-8">
                <label>Dono</label>
                <input type="text" class="form-control" name="dono" value="{{ $pets[0]->dono }}" minlength="3" maxlength="100" required placeholder="Dono">
                @if($errors->has('dono'))
                <small class="alert-danger">
                    {{ $errors->first('dono') }}
                </small>
                @endif
            </div>
            <div class="form-group col-sm-4">
                <label>Telefone</label>
                <input type="text" data-mask="(00) 0 0000.0000" class="form-control" minlength="16" maxlength="16" name="telefone" value="{{ $pets[0]->telefone }}" required placeholder="Ex: (81) 9 8204.9852 *">
                @if($errors->has('telefone'))
                {{ $pets[0]->telefone }}
                <small class="alert-danger">
                    {{ $errors->first('telefone') }}
                </small>
                @endif
            </div>
        </div>
        <div class="row mt-3">
            <div class="form-group col-sm-3">
                <label>Idade</label>
                <input type="number" class="form-control" name="idade" value="{{ $pets[0]->idade }}" minlength="1" maxlength="2" required placeholder="Idade">
                @if($errors->has('idade'))
                {{ $errors->first('idade') }}
                @endif
            </div>
            <div class="form-group col-sm-3">
                <label>Raça</label>
                <input type="text" class="form-control" name="raca" value="{{ $pets[0]->raca }}" minlength="3" maxlength="40" required autofocus placeholder="Raça">
                @if($errors->has('raca'))
                <small class="alert-danger">
                    {{ $errors->first('idade') }}
                </small>
                @endif
            </div>
        </div>
        
        <input type="text" hidden name="id" value="{{$pets[0]->id}}">
        <div class="mb-1 mt-3">
            <button class="btn btn-outline-primary" type="submit">Atualizar</button>
            <a href="{{route('site.index')}}" class="btn btn-outline-secondary" type="reset">Cancelar</a>
        </div>
        
    </form>
</div>

@endsection