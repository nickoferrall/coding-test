exports.up = function(knex, Promise) {
  return knex.schema.createTable('location', function(tbl) {
    tbl.increments();
    tbl.string('name', 128).notNullable();
    tbl.string('postcode', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('location');
};
