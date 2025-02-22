import Link from "next/link";
import { Layout } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md flex justify-between items-center">
      <Link href='/' className="flex items-center">
        <Layout size={32} className="text-white" />
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
          <li>
            <a href="/about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="/products" className="hover:underline">Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}