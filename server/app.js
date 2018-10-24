import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import expressValidator from 'express-validator';
import routes from './routes/index';


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());


app.use('/', routes);
app.use('/api/v1/', (req, res) => {
  res.status(200).json('Welcome to Store Manager!');
});

app.get('/', (req, res) => res.send('Hello World'));

dotenv.config();

app.listen(port);

export default app;
