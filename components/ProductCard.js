import { useRouter } from 'next/router';
import { ArrowRight, Star } from 'lucide-react';

export default function ProductCard({ products }) {
  const router = useRouter();

  const handleCardClick = (productId) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer group"
          onClick={() => handleCardClick(product.id)}
        >
          {/* Image Container */}
          <div className="relative h-48 bg-gray-100">
            <img
              src="https://cdn.leonardo.ai/users/25b41c04-4b83-4c19-be30-6a22fbee1c0d/generations/b325b9fa-1a17-4b58-b62f-83c631354f69/segments/2:4:1/Flux_Dev_Render_highquality_vibrant_images_of_various_electron_1.jpeg"
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                New
              </span>
            )}
          </div>

          {/* Content Container */}
          <div className="p-6">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < product.rating ? "currentColor" : "none"}
                    className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-2">
                ({product.reviews} reviews)
              </span>
            </div>

            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h2>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-blue-600">
                ${product.price}
              </div>
              <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                View Details
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}