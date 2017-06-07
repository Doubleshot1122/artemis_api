exports.up = (knex) => {
  return knex.schema.createTable('game_user', table => {
    table.integer('user_id').notNullable().unique()
    table.integer('game_id').notNullable()
    table.integer('question_id').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('game_user')
}
