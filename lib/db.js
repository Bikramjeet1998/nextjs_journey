import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',       // change if needed
  password: '',       // your MySQL root password
  database: 'nextjs_app'
});

export default pool;
