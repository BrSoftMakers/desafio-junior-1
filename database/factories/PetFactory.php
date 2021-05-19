<?php

namespace Database\Factories;

use App\Models\Pet;
use Illuminate\Database\Eloquent\Factories\Factory;

class PetFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Pet::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nome'=>$this->faker->name(),
            'idade'=>$this->faker->numberBetween(1, 99),
            'raca'=>$this->faker->name(),
            'tipo'=>$this->faker->randomElement(['C','G']),
            'dono'=>$this->faker->firstName(),
            'telefone'=>$this->faker->phoneNumber()
        ];
    }
}
