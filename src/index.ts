import express from 'express';
import { router } from '@/router/v1';
const PORT = import.meta.env.VITE_SERVER_PORT;
const PROD = import.meta.env.PROD;

const server = () => {
  const app = express();

  app.use('/api/v1/', router);
  app.get('/', (req, res) => res.redirect(`${req.baseUrl}/api/v1/`));
  app.listen(PORT);

  return app;
};

const viteNodeApp = server();

if (PROD) {
  console.log(`http://localhost:${PORT}`)
}

export { viteNodeApp };
