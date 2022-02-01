const { fetch } = require("../../utils/pg");

const CREATE_COMMENT = `INSERT INTO comments (comment_content, comment_blog, comment_author) VALUES ($1,$2,$3)
RETURNING
        comment_id AS id,
        comment_content AS content,
        comment_author AS author_id,     
        comment_blog AS blog_id, 
        comment_date AS date
`;

const createComment = (...values) => fetch(CREATE_COMMENT, values);

module.exports = { createComment };
