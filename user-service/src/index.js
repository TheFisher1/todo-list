require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://admin:password123@localhost:27017/todo-users?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/users', userRoutes);

app.use(cors({
    // origin: 'http://localhost:3000',
    origin: 'http://api-gateway:3000/',
    exposedHeaders: ["Authorization"]

}));

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
}); 