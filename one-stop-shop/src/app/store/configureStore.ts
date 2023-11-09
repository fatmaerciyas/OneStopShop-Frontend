import { configureStore } from "@reduxjs/toolkit";
import { counterSlide } from "../../features/contact/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlide.reducer,
    cart: cartSlice.reducer,
  },
});

// export function configureStore() {
//   return createStore(counterReducer);
// }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
