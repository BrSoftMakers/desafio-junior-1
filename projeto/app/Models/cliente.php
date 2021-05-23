<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;


class cliente extends Model
{



    protected $table='cliente';
    protected $fillable = ['nome_animal','idade','tipo','raca','nome_dono','telefone_dono'];

    
}
