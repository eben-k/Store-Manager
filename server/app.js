import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import expressValidator from 'express-validator';
import index from './routes/index';


const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());


app.use('/', index);
app.use('*', (req, res) => {
  res.status(200).json('Welcome to Store Manager!');
});


dotenv.config();

app.listen(port);

export default app;
