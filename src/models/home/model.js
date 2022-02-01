const { fetchAll } = require("../../utils/pg");

const FIND_USER = `SELECT 
                        user_id AS id,
                        user_firstname AS first_name,
                        user_lastname AS last_name,
                        user_email AS email,
                        user_image AS image
FROM users
`;

const FIND_BLOGS = `SELECT 
                        blog_id AS id,
                        blog_title AS title,
                        blog_content AS content, 
                        blog_tags AS tags, 
                        blog_author AS author_id,
                        blog_date AS date
FROM blogs
`;

const findUsers = (...values) => fetchAll(FIND_USER, values);
const findBlogs = (...values) => fetchAll(FIND_BLOGS, values);

module.exports = { findUsers, findBlogs };
