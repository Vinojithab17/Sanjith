// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await db.collection('users').insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error('Insert error:', error);
    return NextResponse.json({ success: false, error });
  }
}

export async function GET() {
  try {
    const users = await db.collection('users').find({}).toArray();

    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json({ success: false, error });
  }
}
