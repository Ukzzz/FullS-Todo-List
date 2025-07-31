const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const todoRoutes = require('./routes/todo');

dotenv.config();           // ✅ Load environment variables first
connectDB();               // ✅ Connect to MongoDB

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/todo', todoRoutes);  // ✅ Mount your routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
