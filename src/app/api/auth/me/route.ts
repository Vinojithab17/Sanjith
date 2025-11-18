// app/api/auth/me/route.ts
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function GET() {
  const token = (await cookies()).get('token')?.value;
  if (!token) return Response.json({ loggedIn: false });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    return Response.json({ loggedIn: true, user });
  } catch (e) {
    console.error('JWT verification failed:', e);
    return Response.json({ loggedIn: false });
  }
}
