const UserInfo = require('../models/UserInfo');

module.exports = {
  createUser: async (req, res) => {
    try {
      const userInfo = new UserInfo(req.body);
      await userInfo.save();
      res.status(201).json({ message: 'User created' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },
};
