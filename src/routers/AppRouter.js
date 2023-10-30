import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Carrito from "../pages/Carrito";
import ProcesoCompra from "../pages/ProcesoCompra";
import LenteEspecifico from "../pages/LenteEspecifico";
import Lentes from "../pages/Lentes";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/layouts/Layout";
import Cuenta from "../pages/Cuenta";

export default function AppRouter() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <Router>
      <Layout
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/compra" element={<ProcesoCompra />} />
          <Route path="/lente/:id" element={<LenteEspecifico />} />
          <Route
            path="/lentes"
            element={
              <Lentes
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }
          />
          <Route path="/cuenta" element={<Cuenta />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
