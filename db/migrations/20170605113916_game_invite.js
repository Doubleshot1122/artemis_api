exports.up = (knex) => {
  return knex.schema.createTable('game_invite', table => {
    table.integer('user_id').notNullable()
    table.integer('game_id').notNullable()
    table.string('invite_status').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('game_invite')
}
