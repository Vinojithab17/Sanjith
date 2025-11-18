import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import ProjectModel from '@/app/models/projects';

// GET project by ID
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  // specific fix: await params before accessing properties
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: 'ID not provided' }, { status: 400 });
  }

  await connectToDatabase();

  try {
    const project = await ProjectModel.findById(id).lean();
    if (!project) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(project);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Invalid ID or Server Error' }, { status: 500 });
  }
}

// UPDATE project by ID
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  // specific fix: await params before accessing properties
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: 'ID not provided' }, { status: 400 });
  }

  await connectToDatabase();

  try {
    const body = await req.json();
    const updated = await ProjectModel.findByIdAndUpdate(id, body, { new: true });

    if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error updating project' }, { status: 500 });
  }
}

// DELETE project by ID
export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  // specific fix: await params before accessing properties
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: 'ID not provided' }, { status: 400 });
  }

  await connectToDatabase();

  try {
    const deleted = await ProjectModel.findByIdAndDelete(id);
    if (!deleted) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error deleting project' }, { status: 500 });
  }
}
