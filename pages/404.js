import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Home, AlertCircle } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function Error() {
  const router = useRouter();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <>
      <Head>
        <title>Error | My Store</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <AlertCircle size={80} className="text-blue-600" />
              <div className="absolute inset-0 animate-ping opacity-30">
                <AlertCircle size={80} className="text-blue-600" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>

          {/* Timer */}
          <div className="bg-blue-50 rounded-lg p-4 mb-8 inline-block">
            <p className="text-blue-600">
              Redirecting to homepage in{" "}
              <span className="font-bold text-blue-700">{timer}</span>{" "}
              seconds...
            </p>
          </div>

          {/* Manual Navigation */}
          <div className="flex justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Home size={20} className="mr-2" />
              Go to Homepage
            </Link>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
