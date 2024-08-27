import React from "react";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return data;
}
export default async function page() {
  const data = await fetchData();
  return (
    <div>
      {data.map((item: any) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}
