import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PetDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Rex', description: 'Nome do pet' })
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Cachorro', description: 'Tipo do pet' })
    animal: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Pincher', description: 'Raça do pet' })
    race: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Maria', description: 'Nome do dono' })
    owner: string;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: '01123456789', description: 'Telefone do dono' })
    phone: number;
    
    @IsDate()
    @IsNotEmpty()
    @ApiProperty({ example: '21/03/2025', description: 'Data de nascimento do pet' })
    birthdate: Date;
}