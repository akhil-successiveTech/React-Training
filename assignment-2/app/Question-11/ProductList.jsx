"use client"
import { useCart } from "@/context/CartContext";

const products = [
  { id: 1, name: 'Shirt', price: 500 },
  { id: 2, name: 'Jeans', price: 1000 },
  { id: 3, name: 'Shoes', price: 1500 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id} className="border p-2 m-2">
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
