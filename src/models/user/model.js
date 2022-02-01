const { fetch, fetchAll } = require("../../utils/pg");

const FIND_USER = `SELECT 
                        user_id AS id,
                        user_firstname AS first_name,
                        user_lastname AS last_name,
                        user_email AS email,
                        user_image AS image
FROM users WHERE user_id = $1
`;

const FIND_BLOGS = `SELECT 
                        blog_id AS id,
                        blog_title AS title,
                        blog_content AS content, 
                        blog_tags AS tags, 
                        blog_author AS author_id,
                        blog_date AS date
FROM blogs WHERE blog_author = $1
`;

const findUser = (...values) => fetch(FIND_USER, values);
const findBlogs = (...values) => fetchAll(FIND_BLOGS, values);

module.exports = { findUser, findBlogs };
