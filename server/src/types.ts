import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core"

export interface MyContext {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}