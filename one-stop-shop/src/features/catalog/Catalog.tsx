import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
import LoadingComponents from "../../app/layout/LoadingComonents";

export default function Catalog() {
  // it was props:any

  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    // fetch("https://localhost:7049/api/Product")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
  }, []);

  if (loading) return <LoadingComponents message="Loading products ..." />;

  return (
    <>
      <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">Shop Grid</h3>
          </div>

          <div className="relative mt-3">
            <ul className="tracking-[0.5px] mb-0 inline-block">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                <a href="index-shop.html">OneStopShop</a>
              </li>
              <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="uil uil-angle-right-b"></i>
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold text-indigo-600"
                aria-current="page"
              >
                Catalog
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-6">
              <div className="shadow dark:shadow-gray-800 p-6 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                <form>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label
                        for="searchname"
                        className="hidden font-semibold"
                      ></label>
                      <div className="relative">
                        <i
                          data-feather="search"
                          className="w-4 h-4 absolute top-3 start-3"
                        ></i>

                        <input
                          name="search"
                          id="searchname"
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 ps-9 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Search"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-semibold">Categories</label>
                      <div className="block mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                              checked
                            />
                            <span className="text-slate-400">Men</span>
                          </label>
                        </div>
                      </div>

                      <div className="block mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                            />
                            <span className="text-slate-400">Women</span>
                          </label>
                        </div>
                      </div>

                      <div className="block mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                            />
                            <span className="text-slate-400">Kid.s Wear</span>
                          </label>
                        </div>
                      </div>

                      <div className="block mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                            />
                            <span className="text-slate-400">Sports</span>
                          </label>
                        </div>
                      </div>

                      <div className="block mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                            />
                            <span className="text-slate-400">Jewellery</span>
                          </label>
                        </div>
                      </div>

                      <div className="block mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                            />
                            <span className="text-slate-400">Electronics</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="font-semibold">Top Products</label>
                      <div className="block mt-2">
                        <span className="flex items-center">
                          <img
                            src="../../assets/images/shop/items/s1.html"
                            className="rounded shadow dark:shadow-gray-800 w-12"
                            alt=""
                          />
                          <span className="ms-3">
                            <span className="block font-semibold">
                              T-shirt (M)
                            </span>
                            <span className="block text-sm text-slate-400">
                              $16USD
                            </span>
                          </span>
                        </span>
                      </div>

                      <div className="block mt-2">
                        <span className="flex items-center">
                          <img
                            src="../../assets/images/shop/items/s2.html"
                            className="rounded shadow dark:shadow-gray-800 w-12"
                            alt=""
                          />
                          <span className="ms-3">
                            <span className="block font-semibold">Bag</span>
                            <span className="block text-sm text-slate-400">
                              $16USD
                            </span>
                          </span>
                        </span>
                      </div>

                      <div className="block mt-2">
                        <span className="flex items-center">
                          <img
                            src="../../assets/images/shop/items/s3.html"
                            className="rounded shadow dark:shadow-gray-800 w-12"
                            alt=""
                          />
                          <span className="ms-3">
                            <span className="block font-semibold">
                              Watch (Men)
                            </span>
                            <span className="block text-sm text-slate-400">
                              $16USD
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <input
                        type="submit"
                        className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                        value="Apply Filter"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-8 md:col-span-6">
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-9 md:col-span-8">
                  <h3 className="text-xl leading-normal font-semibold">
                    Showing 1-8 of 16 results
                  </h3>
                </div>

                <div className="lg:col-span-3 md:col-span-4 md:text-end">
                  <label className="font-semibold hidden"></label>
                  <select className="form-select form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                    <option selected>Sort by latest</option>
                    <option>Sort by popularity</option>
                    <option>Sort by rating</option>
                    <option>Sort by price: low to high</option>
                    <option>Sort by price: high to low</option>
                  </select>
                </div>
              </div>

              <ProductList products={products} />

              <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                  <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">
                      <li>
                        <a
                          href="#"
                          className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <i className="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <i className="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="lg:col-span-5 md:col-span-6">
              <img
                src="assets/images/illustrator/envelope.svg"
                className="mx-auto d-block"
                alt=""
              />
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">
                Mobile Apps
              </span>
              <h4 className="md:text-3xl text-2xl lg:leading-normal leading-normal font-medium my-4">
                Available for your <br /> Smartphones
              </h4>
              <p className="text-slate-400 max-w-xl mb-0">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 30000+
                companies worldwide.
              </p>
              <div className="my-5">
                <a href="#">
                  <img
                    src="assets/images/app/app.png"
                    className="m-1 inline-block"
                    alt=""
                  />
                </a>

                <a href="#">
                  <img
                    src="assets/images/app/playstore.png"
                    className="m-1 inline-block"
                    alt=""
                  />
                </a>
              </div>

              <div className="inline-block">
                <div className="pt-4 flex items-center border-t border-gray-100 dark:border-gray-700">
                  <i
                    data-feather="smartphone"
                    className="me-2 text-indigo-600 h-10 w-10"
                  ></i>
                  <div className="content">
                    <h6 className="text-base font-medium">
                      Install app now on your cellphones
                    </h6>
                    <a
                      href="#"
                      className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                    >
                      Learn More <i className="uil uil-angle-right-b"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
