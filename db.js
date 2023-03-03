const mariadb = require('mariadb');

// create a new database pool
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'toto',
  database: 'todaydeals'
});

// export the pool object for use in other modules
module.exports = pool;
