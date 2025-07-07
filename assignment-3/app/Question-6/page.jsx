import Link from "next/link";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Motorola Edge 50 neo",
    },
    {
      id: 2,
      name: "Samsung Galaxy Edge 50",
    },
    {
      id: 3,
      name: "Sony TV",
    },
    {
      id: 4,
      name: "Dell lattitude E-7430",
    },
  ];
  return (
    <>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/assignment-3/question-6/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;