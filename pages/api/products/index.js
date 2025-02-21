// pages/products/index.js

import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "products.json");

  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    const products = JSON.parse(fileContents);

    if (products) {
      return res.status(200).json(products);
    } else {
      return res.status(404).json({ message: "Products not found" });
    }

  } catch (error) {
    console.error("Failed to load products:", error);
    res.status(500).json({ message: "Failed to load product data" });
  }
}
