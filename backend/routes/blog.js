//Import
import express from 'express';
import { create } from '../controllers/blog.js';
import { requireSignin, adminMiddleware } from '../controllers/auth.js';

//Declaration
const router = express.Router();

//Handling Routes
router.get('/blog', requireSignin, adminMiddleware, create);

export default router;
