// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './server/data/tails.sqlite3' },
    migrations: {
      directory: './server/data/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './server/data/seeds' },
    useNullAsDefault: true
  }
};
