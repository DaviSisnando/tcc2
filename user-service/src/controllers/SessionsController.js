const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!email || !password || !user) return res.status(401).json({
      error: 'Invalid email or password.'
    });

    if (user.status !== 'Ativo') return res.status(401).json({
      error: 'User must be active'
    });

    bcrypt.compare(password, user.password, (e, match) => {
      if (match) {
        return res.json({
          user: { id: user._id, email },
          token: jwt.sign({ id: user._id }, process.env.AUTH_SECRET, {
            expiresIn: "7d",
          }),
        });
      } else return res.status(401).json({ error: 'Invalid email or password.' });
    });
  }
}