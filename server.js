const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const PORT = 5000;

// Route variable
const userInfoRoute = require('./routes/userInfo');

// Middleware...
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/submitUserInfo', userInfoRoute);

connectDB().then(() => {
  app.listen(process.env.PORT || PORT, () =>
    console.log(`Server is running on ${PORT}`)
  );
});
