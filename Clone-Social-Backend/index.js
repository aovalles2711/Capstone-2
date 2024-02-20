// index.js
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const followerRoutes = require('./routes/followerRoutes');
const followingRoutes = require('./routes/followingRoutes');
const likeRoutes = require('./routes/likeRoutes');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:3001/clone_social_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());

// Dummy database for users
const users = [];

// Routes
app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', likeRoutes);
app.use('/api', followerRoutes);
app.use('/api', followingRoutes);
app.use('/api', authRoutes);
app.use('/api', protectedRoutes);
app.use(cors());

// Dummy route for testing server
app.get('/', (req, res) => {
  res.send('Welcome to the social media backend!');
});

// Signup route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  // Check if user already exists
  if (users.some(user => user.email === email)) {
    return res.status(400).send('User already exists');
  }
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Store user in the database (in memory for this example)
  users.push({ username, email, password: hashedPassword });
  res.status(201).send('User created successfully');
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Check if user exists
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(401).send('Invalid email or password');
  }
  // Check password
  if (await bcrypt.compare(password, user.password)) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid email or password');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
