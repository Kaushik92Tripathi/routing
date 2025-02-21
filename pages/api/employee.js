// pages/api/employees.js
import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "employee.json");

  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    const employees = JSON.parse(fileContents);

    // Check if empId is passed as query
    const { empId } = req.query;
    if (empId) {
      const employee = employees.find((emp) => emp.id === parseInt(empId));
      if (employee) {
        return res.status(200).json(employee);
      } else {
        return res.status(404).json({ message: "Employee not found" });
      }
    }

    // Return all employees if no empId
    res.status(200).json(employees);
  } catch (error) {
    console.error("Failed to load employees:", error);
    res.status(500).json({ message: "Failed to load employee data" });
  }
}
