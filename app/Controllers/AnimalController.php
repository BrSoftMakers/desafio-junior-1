<?php

namespace App\Controllers;
use CodeIgniter\Controller;
use App\Models\AnimalModel;

class AnimalController extends Controller
{

	protected $animalModel;
	protected $base_route = '/animal';
	public function __construct()
	{
		$this->animalModel = new AnimalModel();	
	}


	/**
	 * 
	 *  Aqui carrega toda a tabela 
	 * 
	 **/

    public function index()
	{
		$animal = $this->animalModel->findAll();

		// dd($animal);
		return view('animais/index', [
			'titulo' => "Animais",
			'animal' => $this->animalModel->paginate(5),
			'pager' => $this->animalModel->pager,
			'route' => $this->base_route
		]);
	}

	/** 
	 * 
	 *  Carregar o formulario
	 * 
	 **/
	public function create()
	{

		$animal =  $this->animalModel;
		// dd($animal);
		return view('animais/form', [
			'titulo' => "Cadastrar animal",
			'animal' => $animal,
			'route' => $this->base_route
		]);
	}

		/**
	 * 
	 * Editar o registro
	 * 
	 */

	public function update(string $id)
	{

	   $animal =  $this->animalModel->find($id);
		// dd($animal);

	   return view('animais/form',[
		   'titulo' => "Editar o animal",
		   'animal' => $animal,
		   'route' => $this->base_route
	   ]);
	}

	/**
	 * 
     * Exclusão de um registro
     *
     */
    public function delete($id = null){
            
        $animal = $this->animalModel->find($id);
        // dd($animal);
		if ($this->request->getMethod() === 'post'){
        	$this->animalModel->delete($id);

        	return redirect()->to('/')->with('sucesso', 'Deletado com sucesso.');
		}

		return view('animais/excluir', [
			'titulo' => "Excluir o animal",
			'animal' => $animal,
			'route' => $this->base_route
		]);
    }

	/**
	 * 
	 * Salvar os dados do formulario via POST
	 * 
	 */
   public function save(){
        if ($this->request->getMethod() === 'post') {

    

            $data = [
                'animal_nome' => trim($this->request->getPost('animal_nome')),
                'tipo_animal' => trim($this->request->getPost('tipo_animal')),
                'raca' => trim($this->request->getPost('raca')),
                'dono' => trim($this->request->getPost('dono')),
                'telefone' => trim($this->request->getPost('telefone')),
            ];
			
            if (\key_exists('id', $this->request->getPost()))
            $data['id'] = $this->request->getPost('id');

			$this->animalModel->save($data);
            
			// dd($data);


            if (!$data['id'])
				return redirect()->to('/')->with('sucesso', 'Animal cadastrado com sucesso.');
            else
				return redirect()->to('/')->with('sucesso', 'Animal atualizado com sucesso.');

            
        }
    }



	
}

