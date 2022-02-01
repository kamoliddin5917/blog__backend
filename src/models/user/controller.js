const model = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const { userId } = req.body;
      const { id } = req.params;

      if (id != "null") {
        const findUser = await model.findUser(id);

        if (!findUser) return res.status(404).json({ message: "NOT_FOUND!" });

        const findBlogs = await model.findBlogs(id);

        const acount = userId === id ? "ok" : "no";

        return res.status(200).json({
          message: "OK",
          data: { acount, user: findUser, blogs: findBlogs },
        });
      }

      const findUser = await model.findUser(userId);

      if (!findUser) return res.status(404).json({ message: "NOT_FOUND!" });

      const findBlogs = await model.findBlogs(userId);

      const acount = "ok";

      return res.status(200).json({
        message: "OK",
        data: { acount, user: findUser, blogs: findBlogs },
      });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
};
