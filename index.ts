import express from 'express';
import { fn } from './src/index.js';

const app = express()

app.get("/", (_, res, __) => {
	res.json({ result: fn() }).status(200).end()
})

app.listen(3000);
