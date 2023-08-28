const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const PORT = 5000;

// Route variable
const userInfoRoute = require('./routes/userInfo');

// cors
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// Middleware...
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', userInfoRoute);

connectDB().then(() => {
  app.listen(process.env.PORT || PORT, () =>
    console.log(`Server is running on ${PORT}`)
  );
});
