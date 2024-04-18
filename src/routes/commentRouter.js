import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('CommentRouter GET request successful!');
});

router.post('/', (req, res, next) => {
  res.send('CommentRouter POST request successful!');
});

export default router;