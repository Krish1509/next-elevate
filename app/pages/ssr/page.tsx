import React from "react";

// ✅ Fetch data inside a Server Component
export default async function UserSSR() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store", // Ensures fresh data on every request
    });
    const users = await res.json();

    return (
        <div>
            <h1>UserSSR (Server-Side Rendered)</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
