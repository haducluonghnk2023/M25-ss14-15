import React from "react";

async function getProduct() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}
export default async function page() {
  const dataProduct = await getProduct();
  return (
    <div>
      {dataProduct.map((item: any) => {
        return (
          <p className="flex ">
            <h2 className="w-[60%]">{item.title}</h2>
            <h2>{item.price}</h2>
            <img src={item.image} alt="" className="w-[80px]" />
          </p>
        );
      })}
    </div>
  );
}
