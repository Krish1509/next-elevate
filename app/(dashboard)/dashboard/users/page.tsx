import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1>dashbord Users </h1>
      <ul>
        <li>
          <Link href="/dashbord/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashbord/users/2">User 2</Link>
        </li>
      </ul>
    </div>
    );  
};

    export default page