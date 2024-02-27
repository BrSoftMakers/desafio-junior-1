export interface Pet {
    id?: number;
    nome: string;
    dono: string;
    raca: string;
    telefone: string;
    dataNascimento: string;
    animal: "Cachorro" | "Gato";
}
