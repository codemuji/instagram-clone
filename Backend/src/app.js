const express = require("express");
const connectToDatabase = require("./config/database");
const cookieParser = require("cookie-parser");

const app = express();

connectToDatabase().catch((err) => console.error("DB connection error:", err));
app.use(express.json());
app.use(cookieParser());

/**
 * require routes
 */
const authRouter = require("./Routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");

/**
 * using routes
 */

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

module.exports = app;
