<?php

namespace App\Http\Controllers;

use App\Models\Pet;
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

}
