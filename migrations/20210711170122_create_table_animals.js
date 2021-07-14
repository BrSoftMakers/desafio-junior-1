
exports.up = function(knex) {
  return knex.schema.createTable('animals', table => {
      table.increments('id').primary()
      table.string('nome').notNull()
      table.string('idade').notNull()
      table.string('especie').notNull()
      table.string('raca').notNull()
      table.string('dono').notNull()
      table.string('contato').notNull()
      table.string('imageUrl', 1000)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('animals')
};
