@extends('layouts.app')

@section('content')

<form method="post" action="{{route('pets.update',$pet->id)}}">
  @method('PUT')
  @csrf
    <div class="mb-3">
      <label for="name" class="form-label">Nome</label>
      <input type="text" class="form-control" name="name" value="{{$pet->name}}">
    </div>
    <div class="mb-3">
      <label for="age" class="form-label">Idade</label>
      <input type="number" class="form-control" name="age" value="{{$pet->age}}">
    </div>
    <div class="mb-3">
        <label for="species" class="form-label">Espécie</label>
        <select name="species">
          <option value="cachorro">Cachorro</option>
          <option value="gato">Gato</option>
        </select>
    </div>
    <div class="mb-3">
        <label for="breed" class="form-label">Raça</label>
        <input type="text" class="form-control" name="breed" value="{{$pet->breed}}">
    </div>
    <div class="mb-3">
        <label for="ownerName" class="form-label">Nome do dono</label>
        <input type="text" class="form-control" name="ownerName" value="{{$pet->ownerName}}">
    </div>
    <div class="mb-3">
        <label for="ownerPhone" class="form-label">Contato do dono</label>
        <input type="text" class="form-control" name="ownerPhone" value="{{$pet->ownerPhone}}">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>

@endsection