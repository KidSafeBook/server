

const commentController = {
  get: (req, res, next) => {
    res.send('CommentController GET request successful!');
  },
  post: (req, res, next) => {
    res.send('CommentController POST request successful!');
  }
};

export default commentController;