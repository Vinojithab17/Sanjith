"use client";

import { useEffect, useState } from "react";

type User = {
  _id: string;
  name: string;
  email: string;
  age: number;
  role: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.success) {
          setUsers(data.users);
        }
      } catch (err) {
        console.error("Failed to fetch users:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user._id} className="p-3 border rounded-lg">
            <p><strong>{user.name}</strong></p>
            <p>{user.email}</p>
            <p>{user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


