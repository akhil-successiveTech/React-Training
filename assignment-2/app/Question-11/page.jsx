import ProductList from './ProductList';
import Cart from './Cart';
import { CartProvider } from '@/context/CartContext';

export default function Home() {
  return (
    <CartProvider>
      <div style={{ display: 'flex', gap: '40px' }}>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}