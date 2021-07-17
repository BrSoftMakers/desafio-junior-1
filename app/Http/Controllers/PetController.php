<?php

namespace App\Http\Controllers;

use App\Http\Requests\PetRequest;
use App\Models\PetModel;

class PetController extends Controller
{

    private $pets;

    public function __construct()
    {
        $this->pets = new PetModel();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $allpets = $this->pets->paginate(5);

        return view('index', compact('allpets'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        return view('create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PetRequest $request)
    {
        $cad = $this->pets->create([
            'name'=>$request->name,
            'age'=>$request->age,
            'animal'=>$request->animal,
            'breed'=>$request->breed,
            'client'=>$request->client,
            'phone'=>$request->phone

        ]);

        if($cad){
            return redirect('petshop')->with('mensagem','Pet Cadastrado com Sucesso.');
        }


    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

       $pet = $this->pets->find($id);
       return view('show', compact('pet'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $pet = $this->pets->find($id);

        return view('create',compact('pet'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PetRequest $request, $id)
    {
        $update = $this->pets->where(['id'=>$id])->update([
            'name'=>$request->name,
            'age'=>$request->age,
            'animal'=>$request->animal,
            'breed'=>$request->breed,
            'client'=>$request->client,
            'phone'=>$request->phone
        ]);

         if($update){
            return redirect('petshop')->with('mensagem','Pet Atualizado com Sucesso.');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       $del=$this->pets->destroy($id);

       return ($del) ?"sim":"não";
    }
}
