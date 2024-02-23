<<<<<<< HEAD
import { IsOptional } from "class-validator";

export abstract class Filter {
    @IsOptional()
    page: number = 1;
    
    @IsOptional()
    size: number = 12;

    @IsOptional()
    orderBy?: string;

    @IsOptional()
    direction: string = 'asc';

    get offset(): number {
        return (this.page - 1) * this.size
    }

    get query(): object {
        return {
            skip: this.offset,
            take: this.size,
            orderBy: this.orderBy ? { [this.orderBy]: this.direction } : undefined,
            where: this.where
        }
    }

    abstract get where(): object;
=======
import { IsOptional } from "class-validator";

export abstract class Filter {
    @IsOptional()
    page: number = 1;
    
    @IsOptional()
    size: number = 12;

    @IsOptional()
    orderBy?: string;

    @IsOptional()
    direction: string = 'asc';

    get offset(): number {
        return (this.page - 1) * this.size
    }

    get query(): object {
        return {
            skip: this.offset,
            take: this.size,
            orderBy: this.orderBy ? { [this.orderBy]: this.direction } : undefined,
            where: this.where
        }
    }

    abstract get where(): object;
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
}