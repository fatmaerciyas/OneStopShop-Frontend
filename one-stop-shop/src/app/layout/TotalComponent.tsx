// interface Props {
//   total: number;
// }

export default function TotalComponent() {
  return (
    <>
      <div className="lg:col-span-3 md:order-2 order-1">
        <ul className="list-none shadow dark:shadow-gray-800 rounded-md">
          <li className="flex justify-between p-4">
            <span className="font-semibold text-lg">Subtotal :</span>
            <span className="text-slate-400">$ 1500</span>
          </li>
          <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
            <span className="font-semibold text-lg">Cargo :</span>
            <span className="text-slate-400">$ 30</span>
          </li>
          <li className="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
            <span className="font-semibold text-lg">Total :</span>
            <span className="font-semibold">$ 1530</span>
          </li>
        </ul>
      </div>
    </>
  );
}
