import { CounterState } from "./counterReducer";

export default function ContactPage() {
  const { data, title } = useSelector((state: CounterState) => state);
  return (
    <>
      {title}
      <br />
      The data is:{data}
    </>
  );
}
