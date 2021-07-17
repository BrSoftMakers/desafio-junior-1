@extends('templates.template')

@section('content')
 <h1 class="text-center">PetShop</h1>
 <h4 class="text-center">@if(isset($pet)) Editando Pet: Código - {{$pet->id}}  @else Cadastrando Novo Pet @endif</h4> <br>
 
 <div class="col-8 m-auto">
 	
 		@if(isset($errors)&& count($errors)>0)
 			<div class="text-center alert alert-danger">
 				@foreach($errors->all() as $erro)
 					{{$erro}}<br>
 				@endforeach
 			</div>
 		@endif
 	
 	@if(isset($pet))
 		<form name="formEdit" id="formEdit" method="post" action="{{url("petshop/$pet->id")}}">
 			@method('PUT')
 	@else
 		<form name="formCad" id="formCad" method="post" action="{{url('petshop')}}">
 	@endif
	
 		@csrf
 		<div class="form-row">
  <div class="form-group col-md-4">
    <label>Nome</label>
    <input type="text" class="form-control" name="name" id="name" placeholder="Nome do Pet" value="{{$pet->name ?? ''}}">
  </div>
  <div class="form-group col-md-4">
    <label>Idade</label>
    <input type="text" class="form-control" name="age" id="age" placeholder="Idade do Pet" value="{{$pet->age ?? ''}}">
  </div>
  <div class="form-group col-md-4">
    <label>Especie</label>
    <select class="form-control" name="animal" id="animal">
    	<option value="{{$pet->animal ?? ''}}" selected="selected">{{$pet->animal ?? 'informe o tipo de animal'}}</option>
      <option value="gato">Gato</option>
      <option value="cachorro">Cachorro</option>
    </select>
  </div>
  <div class="form-group col-md-4">
    <label>Raça</label>
    <input type="text" class="form-control" name="breed" id="breed" placeholder="Raça do Pet" value="{{$pet->breed ?? ''}}">
  </div>
  <div class="form-group col-md-4">
    <label>Nome do Dono</label>
    <input type="text" class="form-control" name="client" id="client" placeholder="Nome do cliente" value="{{$pet->client ?? ''}}">
  </div>
  <div class="form-group col-md-4">
    <label>Telefone para Contato</label>
    <input type="text" class="form-control sp_celphones" id="sp_celphones" name="phone" placeholder="(00) 00000-0000" value="{{$pet->phone ?? ''}}">
  </div>


 	<div class="mt-3">
 		
 		<button type="submit" class="btn btn-success"><i class="fa fa-save"></i> @if(isset($pet)) Atualizar @else Cadastrar @endif</button>
 		<a href="{{url("/petshop")}}" class="btn btn-primary"><i class="fa fa-undo-alt"></i> Cancelar</a>
 	</div>

</form>

</div>

 </div>
@endsection