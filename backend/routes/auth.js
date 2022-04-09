//Import
import express from 'express';
const router = express.Router();
import { signup, signin, signout, requireSignin } from '../controllers/auth.js';

//validators
import { runValidation } from '../validators/index.js';
import {
  userSignupValidator,
  userSigninValidator,
} from '../validators/auth.js';

//Handling Routes
router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);

//test
//router.get('/secret', requireSignin, (req, res) => {
//  res.json({
//   user:req.user
//  });
//});

export default router;
