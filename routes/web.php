<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

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
//Redirecionamento automático para a página /home
 Route::get('/', function () {
    return redirect(route('site.index'));
});

//Criação a rota tela inicial home
Route::get('/home', [\App\Http\Controllers\PetController::class, 'index'])->name('site.index');

//Criação da rota de cadastro
Route::get('/cadastro', [\App\Http\Controllers\PetController::class, 'create'])->name('site.create');
Route::post('/cadastroPet', [\App\Http\Controllers\PetController::class, 'store'])->name('site.store'); 

//Criação da Rota Listar
Route::post('/listar', [\App\Http\Controllers\PetController::class, 'show'])->name('site.show');

Route::get('/editar/{id}', [\App\Http\Controllers\PetController::class, 'edit'])->name('site.edit');
Route::post('/update', [\App\Http\Controllers\PetController::class, 'update'])->name('site.update');
Route::get('/delete/{id}', [\App\Http\Controllers\PetController::class, 'delete'])->name('site.delete');

