exports.up = (knex) => {
  return knex.schema.createTable('games', table => {
    table.increments()
    table.string('name').notNullable()
    table.text('description').notNullable()
    table.string('status').notNullable()
    table.dateTime('start_time').notNullable()
    table.decimal('start_loc_lat', 10, 6).notNullable()
    table.decimal('start_loc_long', 10, 6).notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('games')
}
