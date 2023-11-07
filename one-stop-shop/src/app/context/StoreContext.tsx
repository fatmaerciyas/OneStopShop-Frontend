import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Cart } from "../models/cart";

interface StoreContextValue {
  cart: Cart | null;
  setCart: (cart: Cart) => void;
  removeItem: (productId: number, quantity: number) => void;
}

//CREATE CONTEXT
export const StoreContext = createContext<StoreContextValue | undefined>(
  undefined
);

//CREATE CUSTOM HOOK
export function useStoreContext() {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw Error("Oops, we do not seem to be inside the provider");
  }
  return context;
}

//CREATE PROVIDER
export function StoreProvider({ children }: PropsWithChildren<any>) {
  const [cart, setCart] = useState<Cart | null>(null);

  function removeItem(productId: number, quantity: number) {
    if (!cart) return;
    const items = [...cart.items]; //THIS CREATES A NEW COPY OF OUR ARRAY AND GOING TO STORE IT INSIDE 'items'
    const itemIndex = items.findIndex((i) => i.productId === productId);

    if (itemIndex >= 0) {
      items[itemIndex].quantity -= quantity;
      if (items[itemIndex].quantity === 0) items.splice(itemIndex, 1);
      setCart((prevState) => {
        return { ...prevState!, items }; // ! MEANS SAFETY CHECK
      });
    }
  }

  return (
    <StoreContext.Provider value={{ cart, setCart, removeItem }}>
      {children}
    </StoreContext.Provider>
  );
}
