import express from 'express';
import { router } from '@/server/router/v1';
import { docsRouter } from '@/server/router/docs';
const PORT = import.meta.env.VITE_SERVER_PORT;
const app = express();

app.use('/api/v1/', router);
app.use('/api/docs', docsRouter);
app.get('/', (req, res) => res.redirect(`${req.baseUrl}/api/docs/`));

app.listen(PORT, () => console.log('Server is ruuning'));

export const viteNodeApp = app;
