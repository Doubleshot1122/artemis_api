exports.seed = function(knex) {
  return knex('game_invite').truncate()
    .then(() => {
      return knex('game_invite').insert([
        {
            user_id: 1,
            game_id: 1,
            invite_status: "pending"
        },
        {
            user_id: 2,
            game_id: 1,
            invite_status: "accepted"
        },
        {
            user_id: 3,
            game_id: 1,
            invite_status: "accepted"
        },
        {
            user_id: 4,
            game_id: 1,
            invite_status: "declined"
        },
        {
            user_id: 1,
            game_id: 2,
            invite_status: "accepted"
        },
        {
            user_id: 2,
            game_id: 2,
            invite_status: "accepted"
        },
        {
            user_id: 3,
            game_id: 2,
            invite_status: "accepted"
        },
        {
            user_id: 4,
            game_id: 2,
            invite_status: "accepted"
        },
        {
            user_id: 1,
            game_id: 3,
            invite_status: "accepted"
        },
        {
            user_id: 2,
            game_id: 3,
            invite_status: "declined"
        },
        {
            user_id: 3,
            game_id: 3,
            invite_status: "accepted"
        },
        {
            user_id: 4,
            game_id: 3,
            invite_status: "pending"
        }
      ]);
    })
};
