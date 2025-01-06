const express = require('express');
const cors = require('cors');
require('./db/db');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

app.use(cors({
    exposedHeaders: ["Authorization"],
    origin: 'http://api-gateway:3000/'
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