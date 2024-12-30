import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/tasks', taskRoutes);

app.use(cors({
    exposedHeaders: ["Authorization"],
    origin: 'http://api-gateway:3000/'
}))

app.listen(PORT, () => {
  console.log(`Task Service running on port ${PORT}`);
}); 