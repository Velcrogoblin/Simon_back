const { Router } = require("express");

const {
  getAllPlayers,
  postPlayer,
  putPlayer,
  destroyPlayer
} = require("../controllers/playerController");

const router = Router();

router
  .get("/", getAllPlayers)
  .post("/", postPlayer)
  .put("/", putPlayer)
  .delete("/", destroyPlayer);

module.exports = router;
