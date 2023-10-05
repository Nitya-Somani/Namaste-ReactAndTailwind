import ItemList from "./ItemList";
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  
  return (
    <div className="container mx-auto mt-10 p-5 w-3/5 ">
    <div className="text-center text-2xl font-bold mb-5">Your Cart</div>
  <div className="border-b-zinc-800">
    {cartItems.length === 0 ? (
      <div className="text-center text-gray-500">
        <h1>Your cart is empty. Add items to your cart.</h1>
      </div>
    ) : (
      <ItemList items={cartItems} />
    )}</div>
  </div>
  );
};

export default Cart;
