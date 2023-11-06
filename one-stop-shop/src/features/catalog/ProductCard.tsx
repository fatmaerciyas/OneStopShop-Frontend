import { Product } from "../../app/models/product";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";

interface Props {
  product: Product; // it is not a list so we didn't like Product[]
}

export default function ProductCard({ product }: Props) {
  const [loading, setLoading] = useState(false);

  const { setCart } = useStoreContext();

  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Cart.addItem(productId)
      .then((cart) => setCart(cart))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  return (
    loading === false && (
      <div className="group">
        <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
          <NavLink to={`/catalog/${product.productId}`}>
            <img src={product.image} alt="" />
          </NavLink>

          <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
            <NavLink
              to={"/cart"}
              onClick={() => handleAddItem(Number(product.productId))}
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md"
            >
              Add to Cart
            </NavLink>
          </div>

          <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
            <li>
              <a
                href="javascript:void(0)"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
              >
                <i className="mdi mdi-heart"></i>
              </a>
            </li>
            <li className="mt-1">
              <a
                href="shop-item-detail.html"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
              >
                <i className="mdi mdi-eye-outline"></i>
              </a>
            </li>
            <li className="mt-1">
              <a
                href="javascript:void(0)"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
              >
                <i className="mdi mdi-bookmark-outline"></i>
              </a>
            </li>
          </ul>

          <ul className="list-none absolute top-[10px] start-4">
            <li>
              <a
                href="javascript:void(0)"
                className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
              >
                New
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <a
            href="shop-item-detail.html"
            className="hover:text-indigo-600 text-lg font-semibold"
          >
            {product.name}
          </a>
          <div className="flex justify-between items-center mt-1">
            <p className="text-green-600">
              ${product.price}{" "}
              <del className="text-red-600">${product.price + 10.0}</del>
            </p>
            <ul className="font-medium text-amber-400 list-none">
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  );
}
