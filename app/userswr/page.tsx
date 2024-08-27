"use client";
import React from "react";
import useSWR from "swr";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

export default function page() {
  const { data, err }: any = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetchData,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (err) return <div>quá trình lấy dữ liệu thất bại</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      page
      <ul>
        {data?.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
