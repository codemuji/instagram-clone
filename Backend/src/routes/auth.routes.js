const express = require("express");
const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const authController = require("../controllers/auth.controller");
const identiyUser = require("../middlewares/auth.middleware");

const authRouter = express.Router();

authRouter.post("/register", authController.registerController);

authRouter.post("/login", authController.loginController);

authRouter.get("/get-me", identiyUser, authController.getMeController);

module.exports = authRouter;
