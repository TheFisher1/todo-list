import 'dotenv/config';
import './db/db.js';
import router from './routes/userRoutes.js';
import express, { json } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors({
  origin: '*',
  exposedHeaders: ["Authorization"]
}));
app.use(json());

app.use('/users', router);

app.use(cors({
    origin: '*',
    exposedHeaders: ["Authorization"]

}));

app.use((err, _, res) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
}); 