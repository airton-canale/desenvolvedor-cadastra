"use client";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const filteredProducts = useMemo(
    () =>
      products.filter((prod) =>
        Object.entries(filters).filter(p => p[1]).every(
          ([property, value]) => Array.isArray(prod[property]) ? prod[property].includes(value) : prod[property] === value
        )
      ),
    [products, filters]
  );

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/products/");
    setProducts(data);
    console.log("response:", data);
  };

  const handleFilter = (property, value) => {
    setFilters((prev) => ({
      ...prev,
      [property]: prev[property] === value ? null : value,
    }));

    console.log("filters: ", filters);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Layout>
        <Sidebar
          filters={filters}
          onFilter={handleFilter}
          products={products}
        />
        <div className="flex flex-row flex-wrap gap-4 justify-center max-w-[976px]">
          {filteredProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </Layout>
    </>
  );
}
