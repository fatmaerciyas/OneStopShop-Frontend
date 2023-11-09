import agent from "../../app/api/agent";
import { CartItem } from "../../app/models/cart";
import { useState, useEffect } from "react";
import LoadingComponents from "../../app/layout/LoadingComonents";
import TotalComponent from "./TotalComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { removeCartItemAsync, setCart } from "./cartSlice";

interface Props {
  item: CartItem;
}

export default function Quantity({ item }: Props) {
  const { cart } = useAppSelector((state) => state.cart);

  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Cart.addItem(productId)
      .then((cart) => dispatch(setCart(cart)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    console.log(item);
  }

  function handleRemoveItem(productId: number, quantity = 1) {
    setLoading(true);
    agent.Cart.removeItem(productId, quantity)
      .then(() => dispatch(removeCartItemAsync({ productId, quantity })))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    setLoading(true);
    agent.Cart.list()
      .then((cart) => setCart(cart))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponents message="Loading cart..." />;
  if (!cart) return <h3 className="m-40">Your quantity is empty</h3>;

  return (
    <>
      <div className="justify-between">
        <button
          onClick={() => handleRemoveItem(item.productId)}
          className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus"
        >
          -
        </button>
        <span className="h-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity">
          {/* {item.quantity}*/}q
        </span>
        <button
          onClick={() => handleAddItem(item.productId)} //() => setQuantity((a) => a + 1)
          className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus"
        >
          +
        </button>
      </div>

      <TotalComponent />
    </>
  );
}
