import { MyContext } from "src/types";
import { Query, Resolver, Ctx, Arg, Int, Mutation } from "type-graphql";
import { AnimalEstimacao, TipoAnimal } from "../entities/AnimalEstimacao";

@Resolver()
export class AnimalEstimacaoResolver {

    @Query(() => [AnimalEstimacao])
    animais(@Ctx() { em }: MyContext)
    : Promise<AnimalEstimacao[]> 
    {
        return em.find(AnimalEstimacao, {});
    }

    @Query(() => AnimalEstimacao, { nullable: true })
    animal(
        @Arg('id', () => Int) id: number,
        @Ctx() { em }: MyContext)
        : Promise<AnimalEstimacao | null>
    {
        return em.findOne(AnimalEstimacao, { id });
    }

    @Mutation(() => AnimalEstimacao)
    async createAnimal(
        @Arg('nome', () => String) nome: string,
        @Arg('idade', () => Int) idade: number,
        @Arg('tipo', () => TipoAnimal) tipo: TipoAnimal,
        @Arg('raca', () => String) raca: string,
        @Arg('nomeDono', () => String) nomeDono: string,
        @Arg('telefoneDono', () => String) telefoneDono: string,
        @Ctx() { em }: MyContext)
        : Promise<AnimalEstimacao>  
    {
        const animalEstimacao = em.create(AnimalEstimacao, {
            nome,
            idade,
            tipo,
            raca,
            nomeDono,
            telefoneDono
        });
        await em.persistAndFlush(animalEstimacao);    
        return animalEstimacao;
    }

    @Mutation(() => AnimalEstimacao, {nullable: true})
    async updateAnimal(
        @Arg('id', () => Int) id: number,
        @Arg('nome', () => String) nome: string,
        @Arg('idade', () => Int) idade: number,
        @Arg('tipo', () => TipoAnimal) tipo: TipoAnimal,
        @Arg('raca', () => String) raca: string,
        @Arg('nomeDono', () => String) nomeDono: string,
        @Arg('telefoneDono', () => String) telefoneDono: string,
        @Ctx() { em }: MyContext)
        : Promise<AnimalEstimacao | null>
    {
        const animalEstimacao = await em.getRepository(AnimalEstimacao).findOne({ id });
        if (!animalEstimacao){
            return null
        }
        animalEstimacao.nome = nome;
        animalEstimacao.idade = idade;
        animalEstimacao.tipo = tipo;
        animalEstimacao.raca = raca;
        animalEstimacao.nomeDono = nomeDono;
        animalEstimacao.telefoneDono = telefoneDono;
        await em.persistAndFlush(animalEstimacao);    
        return animalEstimacao;
    }

    @Mutation(() => Boolean)
    async deleteAnimal(
        @Arg('id', () => Int) id: number,
        @Ctx() { em }: MyContext)
        : Promise<boolean>
    {
        await em.nativeDelete(AnimalEstimacao, { id });
        return true;
    }
}