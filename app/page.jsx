import Link from "next/link";
import React from "react";
console.log("hello");
const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Go to properties</Link>
    </div>
  );
};

export default HomePage;
