import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import ProjectModel from '@/app/models/projects';

export async function GET() {
  await connectToDatabase();
  const projects = await ProjectModel.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(projects, { status: 200 });
}

export async function POST(request: Request) {
  await connectToDatabase();

  try {
    const body = await request.json();
    const project = await ProjectModel.create(body);
    return NextResponse.json(project, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || 'Failed to create project' },
      { status: 500 }
    );
  }
}
