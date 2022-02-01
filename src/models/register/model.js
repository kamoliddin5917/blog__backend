const { fetch } = require("../../utils/pg");

const CREATE_USER = `INSERT INTO users(
                                        user_firstname,
                                        user_lastname,
                                        user_email,
                                        user_password
) VALUES ($1, $2, $3, $4) RETURNING 
                                user_id AS id,
                                user_firstname AS first_name,
                                user_lastname AS last_name,
                                user_email AS email,
                                user_image AS image
`;

const createUser = (...values) => fetch(CREATE_USER, values);

module.exports = { createUser };
