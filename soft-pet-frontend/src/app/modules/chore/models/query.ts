interface QueryInterface {
    name?: string
    page?: number
}

export class Query {
    public name?: string
    public page?: number

    constructor(props: QueryInterface) {
        Object.assign(this, props);
    }
}