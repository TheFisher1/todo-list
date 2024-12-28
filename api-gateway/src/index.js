import express  from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import config from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy requests to user and order services
app.use('/users', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
}));

app.use('/tasks', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true,
}));

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});