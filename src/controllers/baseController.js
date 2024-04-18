import Post from "../common/post.js";
// import Comment from "../../../common/comment.js";

const baseControllerGet = (req, res, next) => {
  console.log("baseControllerGet called");
  // console.log(res);
  const postId = "wqeqw123";
  const authorId = "1234";
  const content = "Post content here ...";
  const comments = [];
  const likes = 2;
  const dislikes = 1;
  
  const post = new Post(postId, authorId, content, comments, likes, dislikes) ;

  console.log(post.content);

  const response = [post]
  

  res.status(200).json({data: response});
};

export default baseControllerGet;