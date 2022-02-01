const { Router } = require("express");

const router = new Router();

const register = require("../models/register/route");
const login = require("../models/login/route");
const blog = require("../models/blog/route");
const comment = require("../models/comment/route");
const user = require("../models/user/route");
const home = require("../models/home/route");

router.use("/auth", register);
router.use("/auth", login);
router.use("/api", blog);
router.use("/api", comment);
router.use("/api", user);
router.use("/api", home);

module.exports = router;
