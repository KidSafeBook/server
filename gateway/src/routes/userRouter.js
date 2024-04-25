import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('UserRouter GET request successful!');
});

router.post('/', (req, res, next) => {  
  res.send('UserRouter POST request successful!');
}
);

export default router;