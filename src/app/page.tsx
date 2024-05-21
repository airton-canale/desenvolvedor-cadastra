"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ListHeader from "@/components/ListHeader";
import Sidebar from "@/components/Sidebar";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import MobileOrderingTab from "@/components/MobileOrderingTab";
import MobileSidebar from "@/components/MobileSidebar";
import ShoppingCart from "@/components/ShoppingCart";
import useLocalStorage from "@/reusable/hooks/useLocalStorage";
import { instance } from "@/reusable/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [selectedOrdering, setSelectedOrdering] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [orderingOpen, setOrderingOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useLocalStorage("products", []);

  const handleSort = (a, b) => {
    if (selectedOrdering === "recents") {
      return moment(b.date).unix() - moment(a.date).unix();
    }
    if (selectedOrdering === "lowest") {
      return a.price - b.price;
    }
    if (selectedOrdering === "biggest") {
      return b.price - a.price;
    }
  };

  const priceFilter = [
    { x: 0, y: 50 },
    { x: 51, y: 150 },
    { x: 151, y: 300 },
    { x: 301, y: 500 },
    { x: 500, y: 99999999 },
  ];

  const checkFilter =
    (prod) =>
    ([property, value]) => {
      if (property === "color") return prod[property] === value;
      if (property === "size") return prod[property].includes(value);
      if (property === "price") {
        const { x, y } = priceFilter[value - 1];
        return prod.price >= x && prod.price <= y;
      }
    };

  const filteredProducts = useMemo(
    () =>
      products
        .filter((prod) =>
          Object.entries(filters)
            .filter((p) => p[1])
            .every(checkFilter(prod))
        )
        .sort(handleSort),
    [products, filters, selectedOrdering]
  );

  const fetchProducts = async () => {
    const { data } = await instance({
      url: '/products'
    })
    setProducts(data);
    setLoading(false);
    console.log("response:", data);
  };

  const handleFilter = (property, value) => {
    setFilters((prev) => ({
      ...prev,
      [property]: prev[property] === value ? null : value,
    }));

    console.log("filters: ", filters);
  };

  const handleOrdering = (event) => {
    setSelectedOrdering(event);
  };

  useEffect(() => {
    fetchProducts();
  }, [showMore]);

  return (
    <>
      <div>
        <Header
          cartProducts={cartProducts}
          onCartClick={() => setCartOpen((prev) => !prev)}
        />
        <ListHeader
          onFilterClick={() => setFilterOpen(true)}
          onOrderClick={() => setOrderingOpen(true)}
          onChange={(e) => handleOrdering(e.value)}
          option={selectedOrdering}
        />
        <Layout>
          <Sidebar
            filters={filters}
            onFilter={handleFilter}
            products={products}
            filterOpen={filterOpen}
            closeFilter={() => setFilterOpen(false)}
          />
          <MobileSidebar
            filters={filters}
            onFilter={handleFilter}
            products={products}
            filterOpen={filterOpen}
            closeFilter={() => setFilterOpen(false)}
          />
          <MobileOrderingTab
            open={orderingOpen}
            closeOrdering={() => setOrderingOpen(false)}
            selectedOrdering={selectedOrdering}
            setSelectedOrdering={setSelectedOrdering}
          />

          <div className="flex flex-row flex-wrap gap-4 justify-center max-w-[976px] w-full lg:p-8 p-2">
            {filteredProducts.slice(0, !showMore ? 9 : 999).map((product) => (
              <Card
                key={product.id}
                {...product}
                onClick={() => setCartProducts((prev) => [...prev, product])}
              />
            ))}
            {filteredProducts.length === 0 && !loading && (
              <div className="w-full flex mt-4 justify-center text-lg">
                <span>Sem resultados</span>
              </div>
            )}
            {filteredProducts.length !== 0 &&
              !loading &&
              filteredProducts.length > 9 && (
                <div className="w-full flex justify-center mt-6">
                  <div className="w-48">
                    <Button
                      onClick={() => {
                        setShowMore((prev) => !prev);
                      }}
                      text={showMore ? "CARREGAR MENOS" : "CARREGAR MAIS"}
                      variant={"primary"}
                    />
                  </div>
                </div>
              )}
          </div>
          <ShoppingCart cartOpen={cartOpen} setCartOpen={setCartOpen} selectedProducts={cartProducts} setCartProducts={setCartProducts} />
        </Layout>
      </div>
      {!loading && <Footer />}
    </>
  );
}
