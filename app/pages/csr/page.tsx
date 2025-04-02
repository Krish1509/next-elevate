"use client"; // CSR must have this

import { useEffect, useState } from "react";

export default function UserCSR() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("✅ CSR: Fetching data on the client...");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                console.log("📥 Data received:", data);
                setUsers(data);
            });
    }, []);

    return (
        <div>
            <h1>UserCSR (Client-Side Rendered)</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
