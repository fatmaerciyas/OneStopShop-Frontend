import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

export default function ContactPage() {
  const dispatch = useAppDispatch();
  const { data, title } = useAppSelector((state) => state.counter);

  return (
    <div className="m-40">
      {title}
      <br />
      The data is:{data}
      <button
        onClick={() => dispatch(decrement(1))}
        className="text-yellow-900"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(increment(1))}
        className="text-yellow-600"
      >
        Increment
      </button>
      <button onClick={() => dispatch(increment(5))} className="text-blue-600">
        Increment by 5
      </button>
    </div>
  );
}
