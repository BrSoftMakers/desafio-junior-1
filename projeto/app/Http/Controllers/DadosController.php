<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\cliente;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\Paginator;

class DadosController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     /**  $cliente = cliente::all();*/

      $cliente = DB::table('cliente')->simplePaginate(2);

      

      

      return view('Home', ['cliente'=>$cliente]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $data =  $request->only(['nome_animal','idade','tipo','raca','nome_dono','telefone_dono']);
       
        cliente::create($data);

        return redirect('/');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cliente = cliente::findOrFail($id);
        return view('Cliente_infor', ['cliente' => $cliente]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cliente = cliente::findOrFail($id);
        return view('Cliente_editar', ['cliente' => $cliente]);


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $cliente = cliente::findOrFail($id);

        $cliente->update([
            'nome_animal'=>$request->nome_animal,
            'idade'=>$request->idade,
            'tipo'=>$request->tipo,
            'raca'=>$request->raca,
            'nome_dono'=>$request->nome_dono,
            'telefone_dono'=>$request->telefone_dono,
        ]);

         return redirect('/');
    }


    public function delete($id){
        $cliente = cliente::findOrFail($id);
        return view('Cliente_deletar', ['cliente'=>$cliente]);
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cliente = cliente::findOrFail($id);
        $cliente->delete();
        return redirect('/');

    }
}
