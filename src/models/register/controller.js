const model = require("./model");
const { hashPassword } = require("../../utils/bcrypt");
const { sign } = require("../../utils/jwt");

module.exports = {
  POST: async (req, res) => {
    try {
      const { firstName, lastName, email, password, conPassword } = req.body;

      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !conPassword ||
        password !== conPassword
      )
        return res.status(400).json({ message: "BAD_REQUEST" });

      const hashedPassword = await hashPassword(password);

      const createUser = await model.createUser(
        firstName,
        lastName,
        email,
        hashedPassword
      );

      if (!createUser)
        return res.status(500).json({ message: "SERVER_CREATED_ERROR" });

      const token = sign({ userId: createUser.id });

      res
        .status(201)
        .json({ message: "CREATED", data: { user: createUser, token } });
    } catch (error) {
      res
        .status(400)
        .json({ message: `This email (${req.body.email}) already use` });
    }
  },
};
