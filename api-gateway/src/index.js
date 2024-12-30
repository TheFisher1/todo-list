import express  from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

const USER_SERVICE_URL = process.env.USER_SERVICE_URL;
const TASK_SERVICE_URL = process.env.TASK_SERVICE_URL;

app.use('/users', createProxyMiddleware({
  target: USER_SERVICE_URL,
  changeOrigin: true,
}));

app.use('/tasks', createProxyMiddleware({
  target: TASK_SERVICE_URL,
  changeOrigin: true,
}));

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});