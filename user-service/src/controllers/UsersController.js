const diacriticSensitiveRegex = require('diacritic-sensitive-regex')

const User = require("../models/User");

module.exports = {
  async create(req, res) {
    try {
      const { filename } = req.file;
      const { dateOfBirth } = req.body;
      
      req.body.dateOfBirth = new Date(dateOfBirth.split('/').reverse().join('-'));
      const user = await User.create({ ...req.body, filename });
      return res.status(201).json({ data: user });
    } catch (e) {
      if (e.keyValue) {
        let [field, value] = Object.entries(e.keyValue)[0];
        if (e.code === 11000) {
          return res.status(409).json({
            error: `Duplicate key error on field: \`${field}\`, with value of: \`${value}\``,
          });
        }
      }
      return res.status(400).json({ error: e });
    }
  },

  async index(req, res) {
    const { filter = '', status = '', role = '', exact } = req.query

    const users = await User.find({
      name: exact ?? { $regex: diacriticSensitiveRegex(filter), $options: 'i' },
      status: { $regex: status, $options: 'i' },
      role: { $regex: role, $options: 'i' }
    }, { image: 0, password: 0 });

    return res.json({ data: users });
  },

  async show(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) return res.status(404).json({ error: "User not found" });

      return res.json({ data: user });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { dateOfBirth } = req.body
      if (dateOfBirth) req.body.dateOfBirth = new Date(dateOfBirth)
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!user) return res.status(404).json({ error: "User not found" });

      return res.json({ data: user });
    } catch (e) {
      if (e.keyValue) {
        let [field, value] = Object.entries(e.keyValue)[0];
        if (e.code === 11000) {
          return res.json({
            error: `Duplicate key error on field: \`${field}\`, with value of: \`${value}\``,
          });
        }
      }
      return res.status(400).json({ error: e });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByIdAndDelete(id);
      if (!user) return res.status(404).json({ error: "User not found" });

      return res.json({ data: user });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  },
};
