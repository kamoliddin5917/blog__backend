const { Router } = require("express");

const router = new Router();

const controller = require("./controller");

router.get("/home", controller.GET);

module.exports = router;
