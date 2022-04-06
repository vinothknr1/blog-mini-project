//Import
import express from 'express';
const router = express.Router();
import { signup, signin } from '../controllers/auth.js';

//validators
import { runValidation } from '../validators/index.js';
import {
  userSignupValidator,
  userSigninValidator,
} from '../validators/auth.js';

//Handling Routes
router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);

export default router;
