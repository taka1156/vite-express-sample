import express from 'express';

const router_v1 = express.Router();

router_v1.get('/', (_, res) => {
  res.send('<h1>Server is running v1</h1>');
});

export { router_v1 };
