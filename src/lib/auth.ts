import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function signToken(payload: any) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
