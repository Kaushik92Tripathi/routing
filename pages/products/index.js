import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products`);
        if (!res.ok) throw new Error("Products not found");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!products) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Product Catalog</h1>
      <ProductCard products={products} />
    </div>
  );
}