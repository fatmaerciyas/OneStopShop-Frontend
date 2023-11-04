import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import NotFound from "../../app/errors/NotFound";
import LoadingComponents from "../../app/layout/LoadingComonents";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    id && // HAVE TO USE id FIST, THEN IT'S AVAILABLE TO SEND details()
      agent.Catalog.details(parseInt(id))
        .then((response) => setProduct(response)) //response
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));

    // axios
    //   .get(`https://localhost:7049/api/Product/${id}`)
    //   .then((response) => setProduct(response.data))
    //   .catch((error) => console.log(error))
    //   .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingComponents message="Loading product..." />;

  if (!product) return <NotFound />;

  return (
    <div className="grid grid-flow-col justify-stretch">
      <div className="w-full h-20">{product.image}</div>
      <div className=" relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-900 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-amber-200 text-black-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b bg-amber-50 dark:border-gray-400">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {product.name}
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
