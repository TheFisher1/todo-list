import 'dotenv/config';

import express, { json } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

import './db/db';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors({
  origin: '*',
  exposedHeaders: ["Authorization"]
}));
app.use(json());

app.use('/users', userRoutes);

app.use(cors({
    origin: '*',
    exposedHeaders: ["Authorization"]

}));

app.use((err, req, res, next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ error: err.error });
  }
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(process.env.DATABASE_URL);
  console.log(process.env.JWT_SECRET);

  console.log(`User Service running on port ${PORT}`);
}); 