<?php

namespace App\Models;

use CodeIgniter\Model;

class AnimalModel extends Model{

    protected $table = 'animal';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'animal_nome',
        'tipo_animal',
        'raca',
        'idade',
        'dono',
        'telefone',
    ];

    protected $returnType = 'object';
}