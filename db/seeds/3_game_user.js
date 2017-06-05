exports.seed = function(knex) {
  return knex('game_user').truncate()
    .then(() => {
      return knex('game_user').insert([
        {
            user_id: 1,
            game_id: 2,
            question_id: 1
        },
        {
            user_id: 2,
            game_id: 2,
            question_id: 2
        },
        {
            user_id: 3,
            game_id: 2,
            question_id: 1
        },
        {
            user_id: 4,
            game_id: 2,
            question_id: 3
        }]);
    })
};
