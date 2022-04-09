//Imports
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import {} from 'dotenv/config';
//Bring Routes
import blogRoutes from './routes/blog.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';

//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE_CLOUD, {})
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log('DB Error =>', err));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if ((process.env.NODE_ENV = 'development')) {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//cors
if (process.env.NODE_ENV == 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}
// routes middleware
app.use('/api', blogRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);

//routes
// app.get('/api', (req, res) => {
//   res.json({ time: Date().toString() });
// });                                       // Instead of typing Logic Here, I have moved my Logic to separate routes and Here I am using as a middleware

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
