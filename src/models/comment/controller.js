const model = require("./model");

module.exports = {
  POST: async (req, res) => {
    try {
      const { content, blogId, userId } = req.body;

      if (!content || !blogId)
        return res.status(400).json({ message: "BAD_REQUEST!" });

      const createComment = await model.createComment(content, blogId, userId);

      if (!createComment)
        return res.status(500).json({ message: "SERVER_CREATED_ERROR!" });

      res.status(201).json({ message: "CREATED", data: createComment });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
};
