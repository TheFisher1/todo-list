import 'dotenv/config';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const auth = (req, res, next) => {
  try {

    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const token = authHeader.replace('Bearer ', '');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default auth; 