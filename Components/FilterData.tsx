"use client";
import { useState } from "react";

type User = {
  name: string;
  id: number;
  username: string;
};

export default function FilterData({ users = [] }: { users: User[] }) {
  const [search, setSearch] = useState("");
  const filteredData = users.filter((user) =>
    user.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((user) => (
            <li key={user.id}>
              {user.name} (@{user.username})
            </li>
          ))
        ) : (
          <li>No users found.</li>
        )}
      </ul>
    </div>
  );
}