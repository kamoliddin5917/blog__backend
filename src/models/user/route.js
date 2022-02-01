const { Router } = require("express");
const { AUTH_USER } = require("../../middlewares/auth");

const router = new Router();

const controller = require("./controller");

router.get("/user/:id", AUTH_USER, controller.GET);

module.exports = router;
