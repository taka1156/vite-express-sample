import express from 'express';

const router_v2 = express.Router();

router_v2.get('/', (_, res) => {
  res.send('<h1>Server is running v2</h1>');
});

export { router_v2 };
