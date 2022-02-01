const { Router } = require("express");
const { AUTH_USER } = require("../../middlewares/auth");

const router = new Router();

const controller = require("./controller");

router.post("/comment", AUTH_USER, controller.POST);

module.exports = router;
