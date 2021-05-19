@extends('layout.layout')

@section('titulo', 'Cadastro Pet')
@section('conteudo')

<div class="container bg-light">
    <form action="{{ route("site.store") }}" class="form-group py-4" method="post">
        @csrf
        <div class="bg-light">
            <label class="mb-2 h3" for="dados">Dados do pet</label><br>
            <small class="text-muted">Todos os campos com (*) são obrigatórios</small>
        </div>
        
        <div class="row">
            <div class="form-group col-sm-8">
                <label>Nome</label>
                <input type="text" class="form-control" name="nome" minlength="3" value="{{ old('nome') }}" maxlength="40" required autofocus placeholder="Nome *">
                @if($errors->has('nome'))
                <small class="alert-danger">
                    {{ $errors->first('nome') }}
                </small>
                @endif    
            </div>
            <div class="form-group col-sm-4">
                <label>Tipo</label>
                <select class="form-select" name="tipo" aria-label="Default select example">
                    <option value="">Tipo de Animal *</option>
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
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
                <input type="text" class="form-control" name="dono" value="{{ old('dono') }}" minlength="3" maxlength="100" required placeholder="Dono *">
                @if($errors->has('dono'))
                <small class="alert-danger">
                    {{ $errors->first('dono') }}
                </small>
                @endif
            </div>
            <div class="form-group col-sm-4">
                <label>Telefone *</label>
                <input type="text" data-mask="(00) 0 0000.0000" class="form-control" minlength="16" maxlength="16" name="telefone" value="{{ old('telefone') }}" required placeholder="Ex: (81) 9 8204.9852">
                @if($errors->has('telefone'))
                <small class="alert-danger">
                    {{ $errors->first('telefone') }}
                </small>
                @endif
            </div>
        </div>
        <div class="row mt-3">
            <div class="form-group col-sm-3">
                <label>Idade</label>
                <input type="number" class="form-control" name="idade" value="{{ old('idade') }}" minlength="1" maxlength="2" required placeholder="Idade *"><br><br>
                @if($errors->has('idade'))
                <small class="alert-danger">
                    {{ $errors->first('idade') }}
                </small>
                @endif
            </div>
            <div class="form-group col-sm-3">
                <label>Raça</label>
                <input type="text" class="form-control" name="raca" value="{{ old('raca') }}" minlength="3" maxlength="40" required autofocus placeholder="Raça *">
                @if($errors->has('raca'))
                <small class="alert-danger">
                    {{ $errors->first('raca') }}
                </small>
                @endif
            </div>
        </div>
        
        <div class="mb-1 mt-3">
            <button class="btn btn-outline-primary" type="submit">Cadastrar</button>
            <a href="{{route('site.index')}}" class="btn btn-outline-secondary" type="reset">Cancelar</a>
        </div>
    </form>
</div>

@endsection