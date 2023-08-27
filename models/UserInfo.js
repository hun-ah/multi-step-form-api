const mongoose = require('mongoose');

const UserInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  planType: {
    type: String,
    required: true,
  },
  monthlyPayment: {
    type: Boolean,
    required: true,
  },
  onlineService: {
    type: Boolean,
    required: true,
  },
  largerStorage: {
    type: Boolean,
    required: true,
  },
  customizeableProfile: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserInfo = mongoose.model('UserInfo', UserInfoSchema);

module.exports = UserInfo;
