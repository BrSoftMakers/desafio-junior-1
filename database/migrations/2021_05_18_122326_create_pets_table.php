<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 40)->comment('Nome do animal');
            $table->unsignedTinyInteger('idade')->comment('Idade do animal');
            $table->string('raca', 30)->comment('Raça do animal');
            $table->enum('tipo', ['Cachorro','Gato'])->comment('Tipo do animal, cachorro ou gato');
            $table->string('dono', 100)->comment('Nome do dono');
            $table->string('telefone', 16)->comment('Telefone do dono, exemplo: 81977712581');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pet');
    }
}
