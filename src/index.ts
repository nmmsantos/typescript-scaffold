import express from 'express';
import { readdir } from './fs';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (_, res) => {
    const dirs = await readdir('.');
    res.json(dirs);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
