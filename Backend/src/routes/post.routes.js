const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");

/**
 * POST/api/post [protected]
 * req.body = {caption,image-file}
 */

postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.createPostController,
);

/**
 * GET /api/posts/ [protected]
 */

postRouter.get("/", identifyUser, postController.getPostController);

/**
 * GET /api/posts/details/:postId
 */
postRouter.get("/details/:postId", identifyUser, postController.getPostDetails);

/**
 * @routes Post /api/posts/like/:postId
 * @description like a post with the id provided in the requrest params.
 */

postRouter.post(
  "/like/:postId",
  identifyUser,
  postController.likePostController,
);

/**
 * @route GET /api/posts/feed
 * @description get all the post creted in DB
 * @access private
 */

postRouter.get("/feed",identifyUser,postController.getFeedController)

module.exports = postRouter;
