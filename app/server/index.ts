import express from 'express';
import { router_v1 } from '@/server/router/v1';
import { router_v2 } from '@/server/router/v2';
import { docsRouter } from '@/server/router/docs';
const PORT = import.meta.env.VITE_SERVER_PORT;
const app = express();

app.use('/api/v1/', router_v1);
app.use('/api/v2/', router_v2);
app.use('/api/', docsRouter);

app.get('*', (req, res) => res.redirect(`${req.baseUrl}/api/`));

app.listen(PORT, () => console.log('Server is ruuning'));

export const viteNodeApp = app;
