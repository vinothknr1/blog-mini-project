//Import
import express from 'express';
const router = express.Router();
import { signup } from '../controllers/auth.js';

//Handling Routes
router.post('/signup', signup);

export default router;
