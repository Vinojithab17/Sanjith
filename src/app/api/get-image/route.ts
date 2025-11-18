import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { ObjectId } from 'mongodb';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID missing' });
  }

  const img = await db.collection('images').findOne({ _id: new ObjectId(id) });

  if (!img) {
    return NextResponse.json({ error: 'Image not found' });
  }

  return NextResponse.json({
    imageData: img.imageData, // Base64 data
  });
}
