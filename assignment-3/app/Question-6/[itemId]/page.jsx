"use client";

import { useParams, useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Motorola Edge 50 neo",
    type: "Phone",
    description: "It is a multitasking phone with a beautiful display",
    price: 20000,
  },
  {
    id: 2,
    name: "Samsung Galaxy Edge 50",
    type: "Phone",
    description: "It is a Phone with snapdragon processor",
    price: 10000,
  },
  {
    id: 3,
    name: "Sony TV",
    type: "Television",
    description: "It is 56 inch TV with AMOLED display",
    price: 40000,
  },
  {
    id: 4,
    name: "Dell Latitude E-7430",
    type: "Laptop",
    description: "It is a laptop with Intel i7 12th generation",
    price: 10000,
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();

  if (!params) return <p>Params not found — check your folder structure.</p>;

  const { id } = params;

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p><strong>Type:</strong> {product.type}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <br />
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
