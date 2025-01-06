require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('./db/db');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

app.use(cors({
    origin: 'http://api-gateway:3000/',
    exposedHeaders: ["Authorization"]

}));

app.use((err, req, res, next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
}); 