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
      <ProductList products={products} />
    </>
  );
}
