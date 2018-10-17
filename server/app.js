import express from 'express';
import bodyParser from 'body-parser';
import saleRoutes from './routes/sale';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/v1/:employeeId', saleRoutes);
app.use('/api/v1/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Store Manager!' });
});

const port = process.env.PORT || 3000;
app.listen(port);

export default app;
