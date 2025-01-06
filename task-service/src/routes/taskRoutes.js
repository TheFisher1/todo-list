const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Get all tasks for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const tasks = await Task.query()
      .where('userId', req.params.userId)
      .orderBy('created_at', 'desc');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
});

// Create a new task
router.post('/', async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const task = await Task.query().insert({
      title,
      description,
      userId
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    
    const task = await Task.query()
      .patchAndFetchById(id, update);
    
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error updating task' });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Task.query().deleteById(id);
    
    if (!deleted) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task' });
  }
});

module.exports = router; 