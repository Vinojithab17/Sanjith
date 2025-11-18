import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/app/models/user';
import { connectToDatabase } from '@/lib/mongodb';
import { signToken } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
    }

    const token = signToken({ id: user._id, role: user.role });

    const res = NextResponse.json({ message: 'Login successful' });
    res.cookies.set('token', token, { httpOnly: true, path: '/' });

    return res;
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
