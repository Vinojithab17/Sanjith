import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Convert file → Buffer → Base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString('base64');

    const dataUri = `data:${file.type};base64,${base64Image}`;

    const result = await db.collection('images').insertOne({
      filename: file.name,
      contentType: file.type,
      imageData: dataUri, // store base64 here
      createdAt: new Date(),
    });

    return NextResponse.json({
      message: 'Uploaded successfully',
      id: result.insertedId.toString(),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
