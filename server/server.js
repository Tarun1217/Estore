const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://tarunmehrish12:QCYJp3Ljk5ZctNUf@cluster0.cfphjp1.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

// Express routes for user registration and login
app.post('/signup', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User({ username, password, email });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) throw new Error('User not found');
    if (password !== user.password) throw new Error('Incorrect password');
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
