// pages/products/[productId]

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`/api/products/${productId}`);
          if (!res.ok) throw new Error("Product not found");
          const data = await res.json();
          console.log(data)
          setProduct(data);
        
        } catch (err) {
          setError(err.message);
        }
      };

      fetchProduct();
    }
  }, [productId]);



  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <div className="mt-4 p-4  rounded-lg">
        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
      </div>
    </div>
  );
}
