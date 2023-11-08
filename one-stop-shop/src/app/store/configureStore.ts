import { createStore } from "redux";

export function configureStore() {
  return createStore(counterReducer);
}
