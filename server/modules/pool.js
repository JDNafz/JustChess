
// const pg = require('pg');

// const pool = new pg.Pool({
//     host: 'localhost',
//     port: 5432,
//     // database: 'chess-app', 
//     database: 'chess2',
// });

// console.log("connected locally")
// module.exports = pool;

// ------------------------------------------------------------------

// JD NEON CONNECTED

const pg = require("pg");
let pool;
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  pool = new pg.Pool({
    host: PGHOST,
    port: 5432,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}
console.log("connected to neon");
module.exports = pool;
