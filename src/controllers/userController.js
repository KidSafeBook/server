

const userController = {
  get: (req, res, next) => {
    res.send('UserController GET request successful!');
  },
  post: (req, res, next) => {
    res.send('UserController POST request successful!');
  }
};

export default userController;