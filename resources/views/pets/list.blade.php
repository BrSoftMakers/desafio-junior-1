@extends('layouts.app')

    <link rel="stylesheet" href="{{asset('css/list.css')}}">

@section('content')
<div id="createPetButton">
    <button type="button" class="btn btn-primary" onclick="window.location='{{route("pets.create")}}'">Criar animal</button>
</div>
    <div id="pets"> 
        @foreach ($pets as $pet)
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Nome: {{$pet->name}}</li>
                <li class="list-group-item">Idade: {{$pet->age}}</li>
                <li class="list-group-item">{{$pet->species}}</li>
                <li class="list-group-item">Raça: {{$pet->breed}}</li>
                <li class="list-group-item">Nome do dono: {{$pet->ownerName}}</li>
                <li class="list-group-item">Contato do dono: {{$pet->ownerPhone}}</li>
                </ul>
            </div>
        @endforeach
    </div>
@endsection