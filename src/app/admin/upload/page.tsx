"use client";

import { useState } from "react";
import Image from "next/image";

export default function UploadPage() {
  const [image, setImage] = useState<string | null>(null);
  const [uploadedId, setUploadedId] = useState<string | null>("691ae1c361218a556b562c51");

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fileInput = form.image as HTMLInputElement;

    if (!fileInput.files?.length) return;

    const formData = new FormData();
    formData.append("image", fileInput.files[0]);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    if (json.id) setUploadedId(json.id);
  }

  async function fetchImage() {
    if (!uploadedId) return;

    const res = await fetch("/api/get-image?id=" + uploadedId);
    const json = await res.json();
    setImage(json.imageData);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Image to MongoDB</h2>

      <form onSubmit={handleUpload}>
        <input type="file" name="image" accept="image/*" required />
        <button type="submit">Upload</button>
      </form>

      {uploadedId && (
        <div>
          <p>Uploaded ID: {uploadedId}</p>
          <button onClick={fetchImage}>Show Image</button>
        </div>
      )}

      {image && (
        <div>
          <h3>Uploaded Image</h3>
          <Image alt={""} src={image} width={200} />
        </div>
      )}
    </div>
  );
}
