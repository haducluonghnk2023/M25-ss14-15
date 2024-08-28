import Products from "../bai7/Products";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("loi");
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <Products initialProducts={products} />;
}
