import express from 'express';
import { router } from '@/router/v1';

const server = () => {
  const app = express();
  const PORT = import.meta.env.VITE_SERVER_PORT;
  
  app.use('/api/v1/', router);
  app.listen(PORT);

  return app;
};

export const viteNodeApp = server();
