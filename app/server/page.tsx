"use client";
import { useRouter } from "next/navigation";
import React from "react";

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return data;
}
export default async function page() {
  const route = useRouter();
  const handleClick = () => {
    route.push("/userswr");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
