export async function up(knex) {
  return knex.schema.createTable('Collection', function (table) {
    table.integer('id')
    table.integer('duck_id')
    table.string('username')
    table.integer('times_collected')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('Collection')
}
