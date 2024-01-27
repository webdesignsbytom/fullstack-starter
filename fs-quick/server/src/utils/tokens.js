import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRY = process.env.JWT_EXPIRY

export const createAccessToken = (id, email) => {
    return jwt.sign({ id, email }, JWT_SECRET, {
      expiresIn: JWT_EXPIRY,
    });
  };