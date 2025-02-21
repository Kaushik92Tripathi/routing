import { useRouter } from 'next/router';

export default function ProductCard({ products }) {
  const router = useRouter();

  const handleCardClick = (productId) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-lg cursor-pointer"
          onClick={() => handleCardClick(product.id)}
        >
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-green-500">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
