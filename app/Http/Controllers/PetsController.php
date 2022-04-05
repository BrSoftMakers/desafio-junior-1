<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class PetsController extends Controller
{
    public function index(){

        $pets = Pet::all();
        

        return view('pets.list',compact('pets'));
    }

    public function create(){

        return view('pets.create');
    }

    public function store(Request $request){

        Pet::create($request->except('_token'));
        return redirect('/');
    }

    public function edit(Int $id){

        $pet = Pet::find($id);
        return view('pets.edit', compact('pet'));
    }

    public function update(Request $request, $id){

        $pet = Pet::find($id);
        $pet->update($request->all());
        return redirect('/');
    }

    public function delete(Pet $pet){

        $pet->delete();

        return redirect('/');
    }

}
