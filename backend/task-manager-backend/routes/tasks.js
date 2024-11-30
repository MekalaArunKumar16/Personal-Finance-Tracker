const express = require('express');
const db = require('../db');
const router = express.Router();

// Create a task
router.post('/', (req, res) => {
  const { title, description, due_date } = req.body;
  const sql = 'INSERT INTO tasks (title, description, due_date) VALUES (?, ?, ?)';
  db.run(sql, [title, description, due_date], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

// Get all tasks
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM tasks';
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Update a task
router.put('/:id', (req, res) => {
  const { title, description, due_date, status } = req.body;
  const sql =
    'UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?';
  db.run(sql, [title, description, due_date, status, req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ changes: this.changes });
  });
});

// Delete a task
router.delete('/:id', (req, res) => {
  const sql = 'DELETE FROM tasks WHERE id = ?';
  db.run(sql, req.params.id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ changes: this.changes });
  });
});

// Toggle task status
router.patch('/:id/toggle-status', (req, res) => {
  const sql = `
    UPDATE tasks 
    SET status = CASE 
      WHEN status = 'Pending' THEN 'Completed' 
      ELSE 'Pending' 
    END 
    WHERE id = ?`;
  db.run(sql, req.params.id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ changes: this.changes });
  });
});

module.exports = router;
