
exports.up = function(knex) {
    return knex.schema.createTable('animais', table => {
        table.increments('id').primary()
        table.string('nome_animal').notNull()
        table.integer('idade_animal').notNull()
        table.string('tipo_animal').notNull()
        table.string('raca_animal').notNull()
        table.string('nome_dono').notNull()
        table.string('telefone_dono').notNull()

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('animais')
};