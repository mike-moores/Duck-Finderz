const up = function (knex) {
  return knex.schema.createTable('Ducks', function (table) {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.integer('rarity')
  })
}

const down = function (knex) {
  return knex.schema.dropTable('Ducks')
}

export { up, down }
