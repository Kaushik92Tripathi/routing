import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    <div className="text-center mt-20">
      <h1 className="text-6xl font-extrabold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-xl">Redirecting to homepage in {timer} seconds...</p>
    </div>
  );
}
