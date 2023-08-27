const UserInfo = require('../models/UserInfo');

module.exports = {
  createUser: (req, res) => {
    const userInfo = new UserInfo(req.body);
    console.log(userInfo);
  },
};
