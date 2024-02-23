export class RegisterNotFound extends Error {
    constructor(field: string){
        super(`Registro de ${field} não encontrando`)
        this.name = 'RegisterNotFound'
    }
}