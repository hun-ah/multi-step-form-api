const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const PORT = 5000;

// Route variable
const userInfoRoute = require('./routes/userInfo');

// cors
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
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
