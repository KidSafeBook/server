import express from 'express';
import controller from '../controllers/baseController.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  controller(req, res, next);
});

router.post('/', (req, res, next) => {
  res.status(200).json({ message: 'BaseRouter POST request successful!' });
  // res.send('BaseRouter POST request successful!');
});

export default router;