const { Player } = require("../db");

const getAllPlayers = async (req, res) => {
  try {
    let players = await Player.findAll();

    if (players.length === 0) {
      return res.status(404).json({ message: "No players found" });
    }

    return res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const postPlayer = async (req, res) => {
  console.log(req.body);
  try {
    const { name, score } =
      req.body;

    if (!name || !score) {
      return res.status(400).json({ message: "There is missing information" });
    }

    const newPlayer = await Player.create({
      name,
      score
    });

    const allPlayers = await Player.findAll();
    console.log(allPlayers);
    // allPlayers = allPlayers.sort((r1, r2) => (r1.score > r2.score) ? 1 : (r1.score < r2.score) ? -1 : 0);
    // deletePlayer = await Player.findByPk(deletePlayer[0].id);
    // deletePlayer.destroy();

    return res
      .status(201)
      .json({ message: `${name} was created!` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



const putPlayer = async (req, res) => {
  try {
    const {
      id,
      name,
      score,
    } = req.body;

    console.log("1");

    if (
      !id ||
      !name ||
      !score
    ) {
      return res.status(400).json({ message: "There is missing information" });
    }

    const existingPlayer = await Player.findByPk(id);

    if (!existingPlayer) {
      return res
        .status(404)
        .json({ message: `No players found with id: ${id}` });
    }

    existingPlayer.update({
      name,
      score
    });

    return res.status(200).json({ message: `${name} was updated successfuly` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPlayers,
  postPlayer,
  putPlayer
};
