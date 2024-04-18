
/**
 * Class representing a comment.
 */
class Comment {
  #postId;
  #parentCommentId;
  #commentId;
  #content;
  #authorId;
  #createdDateTime;
  #editedDateTime;
  #replies;
  #likes;
  #dislikes;

  /**
   * Constructor for Comment.
   *
   * @param {string} postId - The ID of the post the comment belongs to.
   * @param {string} parentCommentId - The ID of the parent comment.
   * @param {string} commentId - The ID of the comment.
   * @param {string} content - The content of the comment.
   * @param {string} authorId - The ID of the author of the comment.
   * @param {Date} createdDateTime - The date and time the comment was created.
   * @param {Date} editedDateTime - The date and time the comment was last edited.
   * @param {Array} replies - The replies to the comment.
   * @param {Array} likes - The users who liked the comment.
   * @param {Array} dislikes - The users who disliked the comment.
   */
  constructor(postId, parentCommentId, commentId, content, authorId
    , createdDateTime, editedDateTime, replies = [], likes = [], dislikes = []) {
    this.#postId = postId;
    this.#parentCommentId = parentCommentId;
    this.#commentId = commentId;
    this.#content = this.#sanitizeContent(content);
    this.#authorId = authorId;
    this.#createdDateTime = createdDateTime;
    this.#editedDateTime = editedDateTime;
    this.#replies = replies;
    this.#likes = likes;
    this.#dislikes = dislikes;
  }

  /**
   * Private method to sanitize content.
   * 
   * @param {string} content - The content to sanitize.
   * @returns {string} - The sanitized content.
   */
  #sanitizeContent(content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

export { Comment };