const express = require('express');
const connectDB = require('./config/Database');

// -------------------------Routes---------------------------------
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

require('dotenv').config();


// Initialize Express app
const app = express();


// Allow Cross origin access
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173",  // ✅ Replace with your frontend URL
  credentials: true,
  exposedHeaders: ["Authorization"] // ✅ Allow frontend to access this header
}));



// Middleware to parse JSON
app.use(express.json());


// Connect to MongoDB
connectDB();


// Define routes
app.use('/api/auth', authRoutes);
// app.use('/api', userRoutes);
app.use('/api/faq', require('./routes/faq'));
app.use('/user', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});