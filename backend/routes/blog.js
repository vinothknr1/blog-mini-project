//Import
import express from 'express';

//Declaration
const router = express.Router();

//Handling Routes
router.get('/', (req, res) => {
  res.json({ time: Date().toString() });
});

export default router;
