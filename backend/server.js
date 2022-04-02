//Imports
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {} from 'dotenv/config';

//app
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//cors
app.use(cors());

//routes
app.get('/api', (req, res) => {
  res.json({ time: Date().toString() });
});

app.get('/veera', (req, res) => {
  res.json({ time: Date().toString() });
});

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
