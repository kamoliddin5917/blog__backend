const { Router } = require("express");
const { AUTH_USER } = require("../../middlewares/auth");

const router = new Router();

const controller = require("./controller");

router
  .post("/blog", AUTH_USER, controller.POST)

  .delete("/blog/:blogId", AUTH_USER, controller.DELETE);

module.exports = router;
