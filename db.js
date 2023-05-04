const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nastyabaryliak',
    password: '123321',
    port: 5432 ,
});
pool.on("connect",()=>{
    console.log("Database connected")
  });
  pool.on("end",()=>{
    console.log("Database end")
  });
module.exports = pool;
