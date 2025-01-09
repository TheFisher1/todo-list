import express, { json } from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js'
import { Model } from 'objection';
import Knex from 'knex';
import { development } from './db/knexfile.js';

const app = express();
const PORT = process.env.PORT;

const knex = Knex(development);
Model.knex(knex);

app.use(json());
app.use('/tasks', taskRoutes);

app.use(cors({
    origin: '*',
    exposedHeaders: ["Authorization"],
}));

app.use((err, req, res, next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Task Service running on port ${PORT}`);
}); 