'use client';
export default function UnauthorizedPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Not Authorized</h1>
      <p>You must login first.</p>
      <a href="/login" style={{ color: 'blue' }}>
        Go to Login
      </a>
    </div>
  );
}
