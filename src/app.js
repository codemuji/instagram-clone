const express = require("express");
const connectToDatabase = require("./config/database");
const cookieParser = require("cookie-parser");
const authRouter = require("./Routes/auth.routes");

const app = express();

connectToDatabase().catch((err) => console.error("DB connection error:", err));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);

module.exports = app;
