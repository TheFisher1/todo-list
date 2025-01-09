import { Router } from 'express';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import User from '../models/User';
const router = Router();
import auth from '../middleware/auth';
import 'dotenv/config';

router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    const hashedPassword = await hash(password, 10);
    
    const user = await User.query().insert({
      email,
      password: hashedPassword,
      name
    });

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    if (error.code === '23505') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Error creating user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.query().findOne({ email });
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await compare(password, user.password);
    
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    console.log("user", process.env.JWT_SECRET);

    const token = sign({ userId: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.set('Authorization', `Bearer ${token}`);
    res.json({ user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ error: 'Error during login' });
  }
});

router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.query().findById(req.user.userId).select('id', 'email', 'name');
    res.json(user);
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ message: error.message });
  }
});



export default router; 