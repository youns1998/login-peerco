"use strict";
const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");


router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/fordisable", ctrl.output.fordisable);
router.get("/selectjoin", ctrl.output.selectjoin);
router.get("/setting", ctrl.output.setting);
router.get("/conference", ctrl.output.conference);


/*
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
*/

module.exports = router;