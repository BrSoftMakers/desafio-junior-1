const Pet = require("../models/Pet");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const data = await Pet.findAll({ include: "race" });
    return res.json(data);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        message: "User not found.",
      });
    }

    const { name, age, race_id } = req.body;
    const data = await Pet.create({ name, age, race_id, user_id });
    return res.json(data);
  },

  async update(req, res) {
    const { user_id, pet_id } = req.params;
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        message: "User not found.",
      });
    }

    const newBody = req.body;
    await Pet.update(newBody, { where: { id: pet_id } });
    return res.json({ message: "Pet updated successfully" });
  },

  async delete(req, res) {
    const { user_id, pet_id } = req.params;
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        message: "User not found.",
      });
    }

    await Pet.destroy({ where: { id: pet_id } });
    return res.json({ message: "Pet deleted successfully" });
  },
};
