<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\DB;

class PetController extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    //Listando todos os Pets na home
    public function index(Pet $pet)
    {
        $pet = Pet::paginate(4);
        
        return view('app.site.home', ['pets' => $pet]);
    }
    
    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    //Retornando a view de cadastro
    public function create()
    {
        return view('app.site.cadastrar');
        
    }
    
    //Inserindo Pets no banco de dados
    public function createCadastro(Request $request){
        
        
    }
    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(Request $request)
    {
        $campos = [
            
            'nome' => 'required|min:3|max:40',
            'idade' => 'required|min:1|max:2',
            'raca' => 'required|min:3|max:30',
            'tipo' => 'required',
            'dono' => 'required|min:3|max:100',
            'telefone'=> 'required|min:16|max:16|regex:/[^0-9]/'
            
        ];
        
        $mensagem = [   
            'required' => 'O campo deve ser preenchido',
            'nome.min' => 'O campo Nome deverá conter ao menos 3 caracteres',
            'nome.max' => 'O campo Nome, deverá conter no máximo 40 caracteres',
            'idade.min' => 'O campo Idade deve conter no mínimo 1 caracter',
            'idade.max' => 'O campo Idade deverá conter no máximo 2 caracteres',
            'raca.min' => 'O campo Raça deve ter no mínimo 3 caracteres',
            'raca.max' => 'O campo Raça deverá ter no máximo 30 caracteres',
            'dono.min' => 'O campo Dono deverá conter ao menos 3 caracteres',
            'dono.max' => 'O campo nome, deverá conter no máximo 40 caracteres',
            'telefone.min' => 'O campo telefone, deverá ter no mínimo 8 caracteres',
            'telefone.max' => 'O campo telefone deverá ter no máximo 11 caracteres',
            'telefone.regex' => 'O telefone digitado não é válido'
            
            
        ];
        $request->validate($campos, $mensagem);
        
        $pet = new Pet();
        
        $pet->nome = $request->input('nome');
        $pet->idade = $request->input('idade');
        $pet->raca = $request->input('raca');
        $pet->tipo = $request->input('tipo');
        $pet->dono = $request->input('dono');
        $pet->telefone = preg_replace('/[^0-9]/', '',$request->input('telefone'));
        $pet->save();
        
        return redirect(route('site.index'));
    
    }
    
    /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    
    //Implementando método de busca unitária por nome
    public function show(Request $request)
    {
        
        $request->validate([
            'nome' => 'required',
            ]);
            $nome = $request->nome;
            
            $select = DB::table('pets')->select('nome', 'idade', 'raca', 'tipo', 'dono','telefone')
            ->where('nome', 'like', $nome.'%')->get();
            return view('app.site.listar', ['resultados' => $select]);
        }
        
        /**
        * Show the form for editing the specified resource.
        *
        * @param  int  $id
        * @return \Illuminate\Http\Response
        */
        public function edit(Request $request)
        {
            
            $pet = DB::table('pets')->select()->where('id', $request->id)->get();
            
            return view('app.site.editar', ['pets' => $pet]);
        }
        
        /**
        * Update the specified resource in storage.
        *
        * @param  \Illuminate\Http\Request  $request
        * @param  int  $id
        * @return \Illuminate\Http\Response
        */
        public function update(Request $request)
        {
            $campos = [
            
                'nome' => 'required|min:3|max:40',
                'idade' => 'required|min:1|max:2',
                'raca' => 'required|min:3|max:30',
                'tipo' => 'required',
                'dono' => 'required|min:3|max:100',
                'telefone'=> 'required|min:16|max:16|regex:/[^0-9]/'
                
            ];
            
            $mensagem = [   
                'required' => 'O campo deve ser preenchido',
                'nome.min' => 'O campo Nome deverá conter ao menos 3 caracteres',
                'nome.max' => 'O campo Nome, deverá conter no máximo 40 caracteres',
                'idade.min' => 'O campo Idade deve conter no mínimo 1 caracter',
                'idade.max' => 'O campo Idade deverá conter no máximo 2 caracteres',
                'raca.min' => 'O campo Raça deve ter no mínimo 3 caracteres',
                'raca.max' => 'O campo Raça deverá ter no máximo 30 caracteres',
                'dono.min' => 'O campo Dono deverá conter ao menos 3 caracteres',
                'dono.max' => 'O campo nome, deverá conter no máximo 40 caracteres',
                'telefone.min' => 'O campo telefone, deverá ter no mínimo 8 caracteres',
                'telefone.max' => 'O campo telefone deverá ter no máximo 11 caracteres',
                'telefone.regex' => 'O telefone digitado não é válido'
                
                
            ];
            $request->validate($campos, $mensagem);
            $id = $request->id;
            $pet['nome'] = $request->input('nome');
            $pet['idade'] = $request->input('idade');
            $pet['raca'] = $request->input('raca');
            $pet['tipo'] = $request->input('tipo');
            $pet['dono'] = $request->input('dono');
            $pet['telefone'] = $request->input('telefone');
            $update = DB::table('pets')->where('id', $id)->update($pet);
            
            return redirect()->route('site.index');
        }
        
        /**
        * Remove the specified resource from storage.
        *
        * @param  int  $id
        * @return \Illuminate\Http\Response
        */
        public function delete(Request $request)
        {
            $id = $request->id;
            $delete = DB::table('pets')->where('id', $id)->delete();
            return redirect(route('site.index'));
        }
    }
    