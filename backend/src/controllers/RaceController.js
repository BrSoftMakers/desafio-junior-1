const Race = require("../models/Race");

module.exports = {
  async index(req, res) {
    const data = await Race.findAll();
    return res.json(data);
  },

  async raceByType(req, res) {
    const { type } = req.params;

    const data = await Race.findAll({
      where: {
        type: type,
      },
    });
    return res.json(data);
  },

  async store(req, res) {
    const { name, type } = req.body;
    const data = await Race.create({ name, type });
    return res.json(data);
  },

  async update(req, res) {
    const { race_id } = req.params;
    const newBody = req.body;
    await Race.update(newBody, {
      where: {
        id: race_id,
      },
    });

    return res.json({ message: "Race updated successfully" });
  },

  async delete(req, res) {
    const { race_id } = req.params;
    await Race.destroy({
      where: {
        id: race_id,
      },
    });
    return res.json({ message: "Race deleted successfully" });
  },
};
