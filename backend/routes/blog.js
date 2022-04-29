//Import
import express from 'express';
import { create, list, listAllBlogsCategoriesTags, read, remove, update } from '../controllers/blog.js';
import { requireSignin, adminMiddleware } from '../controllers/auth.js';

//Declaration
const router = express.Router();

//Handling Routes
router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/blogs', list);
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);


export default router;
