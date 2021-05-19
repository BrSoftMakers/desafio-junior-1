<?php

use App\Http\Controllers\PetsController;
use App\Models\Pet;
use Illuminate\Routing\RouteUri;
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

Route::redirect('/', '/pets/ver');

Route::get('/pets', [PetsController::class, 'create']);
Route::get('/pets/ver', [PetsController::class, 'index'])->name('lista_pets');
Route::post('/pets', [PetsController::class, 'store'])->name('adicionar_pet');
Route::get('/pets/{id}', [PetsController::class, 'show'])->name('ver_pet');
Route::get('/pets/edit/{id}', [PetsController::class, 'edit']);
Route::post('/pets/edit/{id}', [PetsController::class, 'update'])->name('editar_pet');
Route::post('/pets/deletado/{id}', [PetsController::class, 'destroy'])->name('deletar_pet');
