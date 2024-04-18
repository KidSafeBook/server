

const postController = {
  get: (req, res, next) => {
    res.send('PostController GET request successful!');
  },
  post: (req, res, next) => {
    res.send('PostController POST request successful!');
  }
};

export default postController;