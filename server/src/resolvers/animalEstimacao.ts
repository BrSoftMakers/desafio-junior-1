import { Query, Resolver } from "type-graphql";

@Resolver()
export class AnimalEstimacaoResolver {
    @Query(() => String)
    hello() {
        return "hello world"
    }
}