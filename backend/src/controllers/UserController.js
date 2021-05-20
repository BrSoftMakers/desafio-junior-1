const User = require("../models/User");
const Pet = require("../models/Pet");

module.exports = {
  async index(req, res) {
    const data = await User.findAll();
    return res.json(data);
  },

  async show(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        message: "User not found.",
      });
    }

    return res.json(user);
  },

  async userPets(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({
        message: "User not found.",
      });
    }

    const pets = await Pet.findAll({
      include: ["race", "user"],
      where: {
        user_id: user_id,
      },
    });

    return res.json(pets);
  },

  async store(req, res) {
    const { name, telephone } = req.body;
    const data = await User.create({ name, telephone });
    return res.json(data);
  },

  async update(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        message: "User not found.",
      });
    }

    const newBody = req.body;
    console.log(newBody);
    await User.update(newBody, { where: { id: user_id } });
    return res.json({ message: "User updated successfully" });
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        message: "User not found.",
      });
    }

    await User.destroy({ where: { id: user_id } });
    return res.json({ message: "User deleted successfully" });
  },
};
