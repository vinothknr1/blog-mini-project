//Import
import express from 'express';
const router = express.Router();
import {
  signup,
  signin,
  signout,
  requireSignin,
  authMiddleware,
  adminMiddleware,
} from '../controllers/auth.js';
import { read } from '../controllers/user.js';

//Handling Routes

router.get('/profile', requireSignin, authMiddleware, read);

export default router;
