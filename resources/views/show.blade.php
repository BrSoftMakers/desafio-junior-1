@extends('templates.template')

@section('content')
 <h1 class="text-center">PetShop</h1>
 <h4 class="text-center">Visualizar Animal - Codigo: {{$pet->id}} </h4> <br>
 
 <div class="col-8 m-auto">
 	<b>Nome:</b> {{$pet->name}} <br>
 	<b>Idade:</b> {{$pet->age}} <br>
 	<b>Animal:</b> {{$pet->animal}} <br>
 	<b>Raça:</b> {{$pet->breed}} <br>
 	<b>Cliente:</b> {{$pet->client}} <br>
 	<b>Contato:</b> {{$pet->phone}} <i class=""></i> <br>
 	<b>Data de Entrada:</b> {{ \Carbon\Carbon::parse($pet->created_at)->format('d/m/Y')}} <i class=""></i> <br>
 	<b>Data de Saída:</b> {{ \Carbon\Carbon::parse($pet->update_at)->format('d/m/Y')}} <i class=""></i> <br>
 	
 	<div class="mt-3">
 		<a href="{{url("/petshop")}}"><button class="btn btn-primary"><i class="fa fa-undo-alt"></i> Voltar</button></a>
 	</div>
 </div>
@endsection