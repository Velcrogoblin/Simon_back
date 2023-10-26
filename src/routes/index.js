const { Router } = require("express");

const playerRoutes = require("./playerRoutes.js");

const router = Router();

router.use("/players", playerRoutes);

module.exports = router;
