const model = require("./model");

module.exports = {
  POST: async (req, res) => {
    try {
      const { title, content, tags, userId } = req.body;

      if (!title || !content || !tags.length || typeof tags !== "object")
        return res.status(400).json({ message: "BAD_REQUEST!" });

      const createBlog = await model.createBlog(title, content, tags, userId);

      if (!createBlog)
        return res.status(500).json({ message: "SERVER_CREATED_ERROR!" });

      res.status(201).json({ message: "CREATED", data: createBlog });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { userId } = req.body;
      const { blogId } = req.params;

      const deleteBlog = await model.deleteBlog(blogId, userId);

      if (!deleteBlog)
        return res.status(500).json({ message: "SERVER_DELETED_ERROR!" });

      res.status(200).json({ message: "DELETED", data: deleteBlog });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
};
