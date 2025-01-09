import { Router } from 'express';
import { Task } from '../models/Task.js';

const router = Router();

router.get('/', async (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});

router.get('/user/:userId', async (req, res) => {
  try {
    const tasks = await Task.query()
      .where('user_id', req.params.userId)
      .orderBy('created_at', 'desc');

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const task = await Task.query().insert({
      title,
      description,
      userId,
      status: 'pending'
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
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
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await query().deleteById(id);
    
    if (!deleted) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task' });
  }
});

export { router }; 