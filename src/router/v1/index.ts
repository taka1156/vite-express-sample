import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('<h1>Server is running</h1>');
});

export { router };
