@extends('templates.template')

@section('content')
 <h1 class="text-center">PetShop</h1>
 <h4 class="text-center">Desafio Dev junior - SoftMakers</h4>
 
 <div class="col-10 m-auto">
  @csrf
 	<div class="mt-3 mb-3">
 	  <a href="{{url('petshop/create')}}">
 		 <button class="btn btn-success"><i class="fa fa-save"></i> Cadastrar</button></a>
</div>
  @if(session('mensagem'))
    <div class="alert alert-success">
        <p>{{session('mensagem')}}</p>
    </div>
@endif

 	<table class="table text-center">
  <thead class="thead-light">
    <tr class="text-center">
      <th scope="col">id</th>
      <th scope="col">Nome</th>
      <th scope="col">idade</th>
      <th scope="col">Animal</th>
      <th scope="col">Raça</th>
      <th scope="col">Cliente</th>
       <th scope="col">Contato</th>
        <th scope="col">Opções</th>
    </tr>
  </thead>
  <tbody>
  	@foreach($allpets as $pets)
  		<tr>
      <th scope="row">{{$pets->id}}</th>
      <td>{{$pets->name}}</td>
      <td>{{$pets->age}}</td>
      <td>{{$pets->animal}}</td>
      <td>{{$pets->breed}}</td>
      <td>{{$pets->client}}</td>
      <td>{{$pets->phone}}</td>
      <td>
      	<a href="{{url("petshop/$pets->id")}}"><button class="btn btn-dark"><i class="fa fa-eye"></i> Ver</button></a>
      	<a href="{{url("petshop/$pets->id/edit")}}"><button class="btn btn-warning"><i class="fa fa-edit"></i>Editar</button></a>
      	<a class="js-del" href="{{url("petshop/$pets->id")}}"><button class="btn btn-danger"><i class="fa fa-ban"></i> Excluir</button></a>
  	</td>
      
    </tr>
  	@endforeach()
    
    
  </tbody>
</table>
{{$allpets->links()}}


 </div>
@endsection