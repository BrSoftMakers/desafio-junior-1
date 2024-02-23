export abstract class DeletePet {
    execute: (id: string) => Promise<void>
}