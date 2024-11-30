const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./tasks.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    db.run(
      `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        due_date TEXT,
        status TEXT DEFAULT 'Pending'
      )`,
      (err) => {
        if (err) console.error('Error creating table:', err.message);
      }
    );
  }
});

module.exports = db;
