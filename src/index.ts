import express from 'express';
import { router } from '@/router/v1';
const PORT = import.meta.env.VITE_SERVER_PORT;
const app = express();

app.use('/api/v1/', router);
app.get('/', (req, res) => res.redirect(`${req.baseUrl}/api/v1/`));
app.listen(PORT, () => console.log('Server is ruuning'));

export const viteNodeApp = app;
