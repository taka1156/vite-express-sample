import express from 'express';
import basicAuth from 'basic-auth-connect';
import { fileURLToPath } from 'url';
import { resolve } from 'path';
import { DOCS_PATH } from '@/server/costants';
const docsRouter = express.Router();
const __dirname = fileURLToPath(import.meta.url);

const Auth = {
  ID: process.env.BASIC_ID || 'id',
  PW: process.env.BASIC_PASSWORD || 'password',
};

docsRouter.use('/', basicAuth(Auth.ID, Auth.PW));
docsRouter.use('/', express.static(__dirname + DOCS_PATH));
docsRouter.get('/*', (_, res) => {
  res.sendFile(resolve(__dirname + DOCS_PATH, 'index.html'));
});

export { docsRouter };
