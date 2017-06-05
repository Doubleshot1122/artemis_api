exports.seed = function(knex) {
  return knex('games').truncate()
    .then(() => {
      return knex('games').insert([
        {
            id: 1,
            name: 'Mission Seattle',
            description: 'As spys your mission will be to find various clues throughout the city and then rally at the final destination',
            status: 'scheduled',
            start_time: '2017-06-10 09:00:00',
            start_loc_lat: 47.598951,
            start_loc_long: -122.333802
        },
        {
            id: 2,
            name: 'I salute you',
            description: 'Explore the historic locations of Seattle',
            status: 'started',
            start_time: '2017-06-05 09:00:00',
            start_loc_lat: 47.600506,
            start_loc_long: -122.333224
        },
        {
            id: 3,
            name: 'Test Game',
            description: 'I really hope that this works',
            status: 'complete',
            start_time: '2017-05-20 09:00:00',
            start_loc_lat: 47.610136,
            start_loc_long: -122.342057
        }]);
    })
};
