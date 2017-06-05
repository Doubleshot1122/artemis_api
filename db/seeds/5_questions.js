exports.seed = function(knex) {
  return knex('questions').truncate()
    .then(() => {
      return knex('questions').insert([
        {
            id: 1,
            loc_lat: 47.598951,
            loc_long: -122.333802,
            loc_radius: 10,
            question: "What store is located at the base of the ICON building?",
            clue: "President Jackson always faced off against the king and was our 4th president, or was he?",
            answer: "bartell",
            game_id: 2,
            question_order: 1
        },
        {
            id: 2,
            loc_lat: 47.600114,
            loc_long: -122.333176,
            loc_radius: 10,
            question: "What year was the Mary Pang warehouse fire?",
            clue: "4 noble firemen who lost thier lives fighting back the flames, they now stand and squat proudly amoungst the trees and benches",
            answer: 1995,
            game_id: 2,
            question_order: 2
        },
        {
            id: 3,
            loc_lat: 47.620506,
            loc_long: -122.349277,
            loc_radius: 20,
            question: "What is the name of the restaurant at the top of the Space Needle",
            clue: "Once the tallest structure west of the Mississippi River, you can see me on most every poster, postcard, and keychain for Seattle",
            answer: "skycity",
            game_id: 2,
            question_order: 3
        }
      ]);
    })
};
