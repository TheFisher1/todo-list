import express, { json } from 'express';
import cors from 'cors';
import { router } from './routes/taskRoutes.js';

import Knex from 'knex';
import { Model } from 'objection';
import { development } from './db/knexfile.js';
import 'dotenv/config';

const knex = Knex(development);
Model.knex(knex);

knex.raw('SELECT 1')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.log('Database connection failed:', err);
  });

const app = express();
const PORT = process.env.PORT;

app.use(json());
app.use('/tasks', router);

app.use(cors({
    origin: '*',
    exposedHeaders: ["Authorization"],
}));

app.use((err, _, res) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Task Service running on port ${PORT}`);
}); 