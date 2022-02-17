import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('<h1>Server is running v1</h1>');
});

export { router };
