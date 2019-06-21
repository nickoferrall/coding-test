const data = require('../../../stores.json');
console.log('Data', data);

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('location')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('location').insert(data);
    });
};
