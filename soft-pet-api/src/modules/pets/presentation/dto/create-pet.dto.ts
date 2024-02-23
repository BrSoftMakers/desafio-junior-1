import { ApiProperty } from "@nestjs/swagger";
import { IsMobilePhone, IsNotEmpty } from "class-validator";

export class CreatePetDto {
    @ApiProperty({ example: 'Bethoven' })
    @IsNotEmpty({ message: 'nome' })
    name: string

    @ApiProperty({ example: 'São bernado' })
    @IsNotEmpty()
    breed: string

    @ApiProperty({ example: 'DOG' })
    @IsNotEmpty({ message: 'tipo do pet' })
    petType: string

    @ApiProperty()
    @IsNotEmpty({ message: 'nascimento' })
    birth: Date

    @ApiProperty({ example: 'Tadeu Amaral' })
    @IsNotEmpty({ message: 'nome do dono' })
    ownerName: string

    @ApiProperty({ minLength: 11, maxLength: 11, example: "(81) 91234-5678" })
    @IsMobilePhone('pt-BR')
    @IsNotEmpty({ message: 'contato' })
    ownerPhone: string
}