<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetsController extends Controller
{
    public function index(Request $request) {
        $pets = Pet::query()->orderBy('nome')->get();

        $mensagem = $request->session()->get('mensagem');

        return view('pets.index', ['pets'=>$pets, 'mensagem'=>$mensagem]);
    }

    public function create() {
        return view('pets.create');
    }

    public function store(Request $request) {
        Pet::create([
            'nome' => $request->nome,
            'idade' => $request->idade,
            'animal' => $request->animal,
            'raca' => $request->raca,
            'nomeDono' => $request->nomeDono,
            'telefone' => $request->telefone,
        ]);

        $request->session()->flash('mensagem', 'Pet adicionado com sucesso!');

        return redirect('/pets/ver');
    }

    public function show($id) {
        $pet = Pet::findOrFail($id);
        return view('pets.show', ['pet' => $pet]);
    }

    public function edit($id) {
        $pet = Pet::findOrFail($id);
        return view('pets.edit', ['pet' => $pet, 'id' => $id]);
    }

    public function update(Request $request, $id) {
        $pet = Pet::findOrFail($id);

        $pet->update([
            'nome'=>$request->nome,
            'idade'=>$request->idade,
            'animal'=>$request->animal,
            'raca'=>$request->raca,
            'nomeDono'=>$request->nomeDono,
            'telefone'=>$request->telefone
        ]);

        return view('pets.show', ['pet' => $pet]);
    }

    public function destroy($id) {
        $pet = Pet::findOrFail($id);
        $pet->delete();

        return view('pets.destroy', [
            'pet' => $pet
        ]);
    }
}
