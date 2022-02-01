const model = require("./model");

module.exports = {
  GET: async (_, res) => {
    try {
      const findUsers = await model.findUsers();
      const findBlogs = await model.findBlogs();

      res.status(200).json({
        message: "OK",
        data: { users: findUsers, blogs: findBlogs },
      });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
};
