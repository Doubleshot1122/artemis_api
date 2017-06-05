exports.up = (knex) => {
  return knex.schema.createTable('questions', table => {
    table.increments()
    table.decimal('loc_lat', 10, 6).notNullable()
    table.decimal('loc_long', 10, 6).notNullable()
    table.integer('loc_radius').notNullable()
    table.string('question').notNullable()
    table.string('answer').notNullable()
    table.string('clue').notNullable()
    table.integer('game_id').notNullable()
    table.integer('question_order').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('questions')
}
