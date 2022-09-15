const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'iot',
  password: '%D2a3#PsT',
  port: 5432,
});

module.exports = pool;