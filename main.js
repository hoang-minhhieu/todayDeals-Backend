const express = require('express');
const pool = require('./db');

const app = express();

// example route to retrieve all deals from the database
app.get('/deals', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM deals');
    conn.release();
    res.json(rows);
    console.log(conn);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(4000, () => {
  console.log(`MESS (Mongo Event Sourcing) listening at http://localhost:4000`);
});