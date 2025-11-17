import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import ProjectModel from "@/app/models/projects";

// GET project by ID
export async function GET(
  _req: Request,
  { params }: { params: { id: string } } // <-- type inline
) {
  await connectToDatabase();

  const project = await ProjectModel.findById(params.id).lean();
  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(project);
}

// UPDATE project by ID
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();

  const body = await req.json();
  const updated = await ProjectModel.findByIdAndUpdate(params.id, body, { new: true });

  if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(updated);
}

// DELETE project by ID
export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();

  const deleted = await ProjectModel.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ success: true });
}
