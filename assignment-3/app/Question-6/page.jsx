import Link from "next/link";

const products = [
  { id: 1, name: "Motorola Edge 50 neo" },
  { id: 2, name: "Samsung Galaxy Edge 50" },
  { id: 3, name: "Sony TV" },
  { id: 4, name: "Dell Latitude E-7430" },
];

export default function ProductListPage() {
  return (
    <div>
      <h1>Product List</h1>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "5px" }}>
            <Link href={`/Question-6/${product.id}`}>
              <p>{product.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
