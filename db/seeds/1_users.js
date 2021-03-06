exports.seed = function(knex) {
  return knex('users').truncate()
    .then(() => {
      return knex('users').insert([
        {
            user_name: 'alphaFox1',
            display_name: 'Donny',
            email: 'skibo415@yahoo.com',
            password: 'test123',
            icon: 1
        }, {
            user_name: 'evil_lyns1',
            display_name: 'Summer',
            email: 'evil_lyns@yahoo.com',
            password: 'test123',
            icon: 2
        },
        {
            user_name: 'goredwings',
            display_name: 'Joshua',
            email: 'joshuawarren000@gmail.com',
            password: 'test123',
            icon: 3
        },
        {
            user_name: 'dasteacher',
            display_name: 'Wes',
            email: 'test@test.com',
            password: 'test123',
            icon: 4
        },
        {
            user_name: 'redrum',
            display_name: 'Derek',
            email: 'resident@msn.com',
            password: 'test123',
            icon: 1
        }
      ]);
    })
};
