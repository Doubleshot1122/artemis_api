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
        },
        {
            user_id: 4,
            game_id: 2,
            question_id: 3
        },
        {
            user_id: 5,
            game_id: 2,
            question_id: 3
        },
        {
            user_id: 6,
            game_id: 2,
            question_id: 3
        },
        {
            user_id: 7,
            game_id: 2,
            question_id: 3
        },
        {
            user_id: 8,
            game_id: 2,
            question_id: 3
        },
        {
            user_id: 9,
            game_id: 2,
            question_id: 3
        },
        {
            user_id: 10,
            game_id: 2,
            question_id: 3
        },
        {
            user_id: 11,
            game_id: 2,
            question_id: 3
        },
        {
            user_id: 12,
            game_id: 2,
            question_id: 3
        },
        {
            user_id: 13,
            game_id: 2,
            question_id: 3
        },
        {
            user_id: 14,
            game_id: 1,
            question_id: 3
        },
        {
            user_id: 15,
            game_id: 1,
            question_id: 4
        },
        {
            user_id: 16,
            game_id: 1,
            question_id: 2
        },
        {
            user_id: 17,
            game_id: 1,
            question_id: 3
        },
        {
            user_id: 18,
            game_id: 1,
            question_id: 2
        },
        {
            user_id: 19,
            game_id: 1,
            question_id: 3
        },
        {
            user_id: 20,
            game_id: 1,
            question_id: 1
        }]
      );
    })
};
