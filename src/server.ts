import express from 'express';
import { CreateCourse } from './routes';

const app = express();

const port = 3333;

app.get("/", CreateCourse)

app.listen(port);