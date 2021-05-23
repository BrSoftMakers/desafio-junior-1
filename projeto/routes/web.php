<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DadosController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [DadosController::class, 'index']);

Route::get('/cadastrar/novo', [DadosController::class, 'create']);

Route::post('/cadastrar/novo', [DadosController::class, 'store'])->name('ca');
   
Route::get('/listar/{id}', [DadosController::class, 'show']);

Route::get('/cliente/editar/{id}', [DadosController::class, 'edit']);

Route::post('/cliente/editar/{id}', [DadosController::class, 'update'])->name('editar');

Route::get('/cliente/excluir/{id}', [DadosController::class, 'delete']);

Route::post('/cliente/excluir/{id}', [DadosController::class, 'destroy'])->name('apagar');