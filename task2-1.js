let mysql=require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'vamsi',
  password: '1234', 
  database: 'database', 
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database successfully!');
});


function createDatabase(database) {
  const createDbQuery = `CREATE DATABASE IF NOT EXISTS ${database}`;
  connection.query(createDbQuery, (err, result) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }
    console.log(`Database ${database} created successfully!`);
  });
}
function createTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      department VARCHAR(100),
      salary DECIMAL(10, 2)
    )
  `;
  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error in creating table:', err);
      return;
    }
    console.log('"employees" created successfully');
  });
}
