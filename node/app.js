const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'mydb',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  const name = req.query.name || 'Anonymous';

  const query = `INSERT INTO people (name) VALUES ('${name}')`;
  connection.query(query, (err, result) => {
    if (err) throw err;

    console.log('Record inserted:', name);

    connection.query('SELECT name FROM people', (err, rows) => {
      if (err) throw err;

      const names = rows.map((row) => row.name).join(', ');

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <p>Names registered: ${names}</p>
      `);
    });
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
