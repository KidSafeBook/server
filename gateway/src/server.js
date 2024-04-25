import express from 'express';
import router from './routes/router.js'

const app = express();
const PORT = process.env.PORT || 3010;
const isProduction = process.env.NODE_ENV !== 'development';

app.use(express.json());
app.use(router);

app.use((error, res, req, next) => {
//  !isProduction && console.log(error);
  if (error.status === 404) {
    res.status(404).send('Not found');
  }
  if (error.status === 400) {
    res.status(400).send('Bad request');
  }

  // Default error handling
  res.status(500).send('Internal server error');

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});