const { fetch } = require("../../utils/pg");

const FIND_USER = `SELECT 
                        user_id AS id,
                        user_password AS password
FROM users WHERE user_email = $1`;

const findUser = (...values) => fetch(FIND_USER, values);

module.exports = { findUser };
