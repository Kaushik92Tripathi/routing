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

  if (error) return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-red-500 text-xl bg-red-50 px-6 py-4 rounded-lg shadow-sm">
        {error}
      </div>
    </div>
  );

  if (!products) return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">Product Catalog</h1>
      <p className="text-gray-600 text-center mb-12 text-lg">Discover our amazing collection of products</p>
      <ProductCard products={products} />
    </div>
  );
}