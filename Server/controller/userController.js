const User = require('../model/userSchema');

const registerUser = async (req, res) => {
  try {
    const { username, password, type } = req.body;
    if (!username || !password || !type) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken' });
    }
    const newUser = new User({ username, password, type });
    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        username: newUser.username,
        type: newUser.type,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser };
