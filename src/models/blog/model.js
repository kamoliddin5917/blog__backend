const { fetch } = require("../../utils/pg");

const CREATE_BLOG = `INSERT INTO blogs (blog_title, blog_content, blog_tags, blog_author) VALUES ($1,$2,$3,$4)
RETURNING
        blog_id AS id,
        blog_title AS title,
        blog_content AS content, 
        blog_tags AS tags, 
        blog_author AS author_id,
        blog_date AS date
`;
const DELETE_BLOG = `DELETE FROM blogs WHERE blog_id = $1 AND blog_author = $2 RETURNING
        blog_id AS id,
        blog_title AS title,
        blog_content AS content, 
        blog_tags AS tags, 
        blog_author AS author_id,
        blog_date AS date
`;

const createBlog = (...values) => fetch(CREATE_BLOG, values);
const deleteBlog = (...values) => fetch(DELETE_BLOG, values);

module.exports = { createBlog, deleteBlog };
