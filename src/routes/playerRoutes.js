const { Router } = require("express");

const {
  getAllPlayers,
  postPlayer,
  putPlayer
} = require("../controllers/playerController");

const router = Router();

router
  .get("/", getAllPlayers)
  .post("/", postPlayer)
  .put("/", putPlayer);

module.exports = router;
