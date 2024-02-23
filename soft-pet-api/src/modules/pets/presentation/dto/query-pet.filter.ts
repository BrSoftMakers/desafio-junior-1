import { IsOptional } from "class-validator";
import { Filter } from "src/modules/chore/models";

export class QueryPetFilter extends Filter {
    @IsOptional()
    name: string

    get where(): object{
        const where = {}
        if(this.name) where['name'] = { contains: this.name }
        return where
    }
}