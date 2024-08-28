"use client";

import { useState } from "react";

export default function Products({
  initialProducts,
}: {
  initialProducts: any[];
}) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const filterProducts = () => {
    const filtered = initialProducts.filter(
      (product) =>
        product.price >= Number(minPrice) && product.price <= Number(maxPrice)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <div>
        <label>
          Giá tối thiểu:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Giá tối đa:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
        <button onClick={filterProducts}>Lọc sản phẩm</button>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Giá: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
