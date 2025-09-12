import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return new NextResponse(null, { status: 405, statusText: 'Method Not Allowed' });
  }

  try {
    const { email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db(); // default DB from URI
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ email });

    if (!user || user.password !== password) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    );

    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword, token });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}