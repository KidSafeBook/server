import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('PostRouter GET request successful!');
});

router.post('/', (req, res, next) => {
  res.send('PostRouter POST request successful!');
});

export default router;