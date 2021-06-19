import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core"

export interface MyContext {
    em: EntityManager<IDatabaseDriver<Connection>>
}