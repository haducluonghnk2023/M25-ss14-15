"use client";
import { useEffect, useState } from "react";

async function GET() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("failed");
  }
  const data = await res.json();
  return data;
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await GET();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {products.map((product: any) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
