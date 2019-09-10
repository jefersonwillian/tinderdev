const express = require("express");
const DevController = require("./controllers/DevController");
const LikesController = require("./controllers/LikeController");
const DisklikesController = require("./controllers/DislikeController");

const routes = express.Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikesController.store);
routes.post("/devs/:devId/dislikes", DisklikesController.store);

module.exports = routes;
