// Updated pages/about/[empId].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EmployeeDetail() {
  const router = useRouter();
  const { empId } = router.query;

  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (empId) {
      const fetchEmployee = async () => {
        try {
          const res = await fetch(`/api/employee?empId=${empId}`);
          if (!res.ok) throw new Error("Employee not found");
          const data = await res.json();
          setEmployee(data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchEmployee();
    }
  }, [empId]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!employee) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold text-indigo-600">Employee Details</h1>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Position:</strong> {employee.position}</p>
      </div>
    </div>
  );
}
