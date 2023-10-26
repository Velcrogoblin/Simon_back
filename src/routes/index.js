const { Router } = require("express");

const playerRoutes = require("./purchaseRoutes.js");

const router = Router();

router.use("/players", playerRoutes);

module.exports = router;
