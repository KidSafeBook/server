import Post from "../common/post.js";
// import Comment from "../../../common/comment.js";

const baseControllerGet = (req, res, next) => {
  // console.log("baseControllerGet called");
  const post = {
    postId: "wqeqw123",
    username: "User 1",
    authorId: "1234",
    title: "Post 1 title here ...",
    content: "Post content here ...",
    comments: [],
    likes: 2,
    dislikes: 1,
    creationDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    updateDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1)
  };

  const post1 = {
    postId: "wqeqw456",
    username: "User 2",
    authorId: "6543",
    title: "Post 2 title here ...",
    content: "Post new post content here ...",
    comments: [],
    likes: 3,
    dislikes: 5,
    creationDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    updateDate: null
  };

  const response = [post, post1]

  // console.log(response)


  res.status(200).json({ data: response });
};

export default baseControllerGet;