import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import companyData from "../../data/employee.json";
import Head from "next/head";

export default function EmployeeDetail() {
  const router = useRouter();
  const { empId } = router.query;
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (empId) {
      const employeeData = companyData.employees.find(
        (emp) => emp.id === empId
      );
      if (employeeData) {
        setEmployee(employeeData);
      } else {
        setError("Employee not found");
      }
    }
  }, [empId]);

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-red-500 text-xl mb-4">{error}</p>
        <Link
          href="/about"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Return to About Page
        </Link>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{employee.name} - About Page</title>
        <meta name="description" content={`About page for ${employee.name}`} />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-4">
            <h1 className="text-3xl font-bold text-white">{employee.name}</h1>
            <p className="text-blue-100">{employee.position}</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Details</h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Department:</strong> {employee.department}
                  </li>
                  <li>
                    <strong>Experience:</strong> {employee.experience}
                  </li>
                  <li>
                    <strong>Employee ID:</strong> {employee.id}
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Expertise</h2>
                <ul className="space-y-2">
                  {employee.expertise.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Key Achievements</h2>
              <p className="text-gray-700">{employee.achievements}</p>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/about"
                className="inline-block bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Back to About Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
