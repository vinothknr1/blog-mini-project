//Import
import express from 'express';
import { time } from '../controllers/blog.js';

//Declaration
const router = express.Router();

//Handling Routes
router.get('/', time);

export default router;
