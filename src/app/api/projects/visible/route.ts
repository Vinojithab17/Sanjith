import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import ProjectModel from '@/app/models/projects';

export async function GET() {
  try {
    await connectToDatabase();

    // Find only projects where visibility is true
    const visibleProjects = await ProjectModel.find({ visibility: true })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(visibleProjects, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch visible projects' }, { status: 500 });
  }
}
