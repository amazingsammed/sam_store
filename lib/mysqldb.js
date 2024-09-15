import mysql from "mysql2";

const myDB = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'storeapp'
}).promise();


export default myDB;
 