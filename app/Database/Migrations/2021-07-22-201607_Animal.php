<?php namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Animal extends Migration
{
	public function up()
	{
		$this->forge->addField([
			'id' => [
				'type' => 'SERIAL'
			],
			'animal_nome' => [
				'type' => 'VARCHAR',
				'constraint' => '128'
			],
			'tipo_animal' => [
				'type' => 'BOOLEAN',
				'null' => false,
				'default' => false
			],
			'raca' => [
				'type' => 'VARCHAR',
				'constraint' => '128'
			],
			'idade' => [
				'type' => 'INT',
			],
			'dono' => [
				'type' => 'VARCHAR',
				'constraint' => '128'
			],
			'telefone' => [
				'type' => 'VARCHAR',
				'constraint' => '20'
			],
		]);

		$this->forge->addKey('id', true);
		$this->forge->createTable('animal');
	}

	public function down()
	{
		$this->forge->dropTable('animal');
	}
}
