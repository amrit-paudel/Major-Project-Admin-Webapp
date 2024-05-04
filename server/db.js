
// connecting our database to the server
// it becomes really easy using the pg library 

const Pool = require("pg").Pool; 

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "attendancesystem"
  });
  
  module.exports = pool;
  
