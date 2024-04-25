import Post from "../common/post.js";
// import Comment from "../../../common/comment.js";

const baseControllerGet = (req, res, next) => {
  // console.log("baseControllerGet called");
  const post = {
    postId: "wqeqw123",
    authorId: "1234",
    title: "Post 1 title here ...",
    content: "Post content here ...",
    comments: [],
    likes: 2,
    dislikes: 1
  };

  const post1 = {
    postId: "wqeqw456",
    authorId: "6543",
    title: "Post 2 title here ...",
    content: "Post new post content here ...",
    comments: [],
    likes: 3,
    dislikes: 5
  };

  const response = [post, post1]

  // console.log(response)


  res.status(200).json({ data: response });
};

export default baseControllerGet;