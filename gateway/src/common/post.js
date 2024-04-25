import { v4 as uuidv4 } from "uuid";

/**
 * Post class component.
 */
class Post {
  #postId;
  #authorId;
  #createdDateTime;
  #editedDateTime;
  #content;
  #comments;
  #likes;
  #dislikes;

  /**
   * Constructor for Post class.
   *
   * @param {string} postId - The ID of the post.
   * @param {string} authorId - The ID of the author of the post.
   * @param {string} content - The content of the post.
   * @param {Array} comments - The comments on the post.
   * @param {number} likes - The number of likes on the post.
   * @param {number} dislikes - The number of dislikes on the post.
   * @param {Date} creationDateTime - The date and time the post was created.
   * @param {Date} editedDateTime - The date and time the post was last edited.
   */
  constructor(postId = null, authorId, content = null, comments = []
    , likes = 0, dislikes = 0, creationDateTime = null, editedDateTime = null) {
    this.#postId = postId ? postId : this.#generatePostId();
    this.#authorId = authorId;
    this.#content = this.#sanitizeContent(content);
    this.#createdDateTime = creationDateTime ? creationDateTime : new Date().toISOString();
    this.#editedDateTime = editedDateTime ? editedDateTime : new Date().toISOString();
    this.#comments = comments;
  }

  /**
   * Getter for authorId.
   *
   * @returns {string} - The author's ID.
   */
  get authorId() {
    return this.#authorId;
  }

  /**
   * Getter for content.
   *
   * @returns {string} - The content of the post.
   */
  get content() {
    return this.#content;
  }

  /**
   * Getter for createdDateTime.
   *
   * @returns {Date} - The date and time the post was created.
   */
  get createdDateTime() {
    return this.#createdDateTime;
  }

  /**
   * Getter for editedDateTime.
   *
   * @returns {Date} - The date and time the post was last edited.
   */
  get editedDateTime() {
    return this.#editedDateTime;
  }

  /**
   * Getter for comments.
   *
   * @returns {Array} - The comments on the post.
   */
  get comments() {
    return this.#comments;
  }


  /**
   * Add a comment to the post.
   *
   * @param {string} newContent - The new content to update the post with.
   */
  updateContent(newContent) {
    this.#content = this.#sanitizeContent(newContent);
    this.#editedDateTime = new Date().toISOString();
  }

  /**
   * Sanitizes the new content.
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

  /**
   * Generates a post ID.
   * 
   * @returns {string} - The generated post ID.
   */
  #generatePostId() {
    return uuidv4();
  }
}

export default Post;