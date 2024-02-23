<<<<<<< HEAD
export class RegisterNotFound extends Error {
    constructor(field: string){
        super(`Registro de ${field} não encontrando`)
        this.name = 'RegisterNotFound'
    }
=======
export class RegisterNotFound extends Error {
    constructor(field: string){
        super(`Registro de ${field} não encontrando`)
        this.name = 'RegisterNotFound'
    }
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
}