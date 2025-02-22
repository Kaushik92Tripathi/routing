import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowLeft, Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import Link from 'next/link';

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
          setProduct(data);
        } catch (err) {
          setError(err.message);
        }
      };
      fetchProduct();
    }
  }, [productId]);

  if (error) return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-red-500 text-xl bg-red-50 px-6 py-4 rounded-lg shadow-sm">
        {error}
      </div>
    </div>
  );

  if (!product) return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link 
        href="/products"
        className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
            <img
              src="https://cdn.leonardo.ai/users/25b41c04-4b83-4c19-be30-6a22fbee1c0d/generations/b325b9fa-1a17-4b58-b62f-83c631354f69/segments/2:4:1/Flux_Dev_Render_highquality_vibrant_images_of_various_electron_1.jpeg"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.isNew && (
            <span className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full">
              New Arrival
            </span>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < (product.rating || 0) ? "currentColor" : "none"}
                    className={i < (product.rating || 0) ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-gray-500 ml-2">
                {product.reviews || 0} reviews
              </span>
            </div>
            <p className="text-3xl font-bold text-blue-600">
              ${product.price}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">
              {product.description}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500">Category</p>
                <p className="font-medium">{product.category}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500">Product ID</p>
                <p className="font-medium">{product.id}</p>
              </div>
              {product.stock && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500">Stock</p>
                  <p className="font-medium">{product.stock} units</p>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-600" />
            </button>
            <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}