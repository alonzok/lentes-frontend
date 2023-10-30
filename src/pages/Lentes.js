import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

export default function Lentes({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">${product.price}</p>
            <Link to={`/lente/${product.id}`}>
              <button className="block mx-auto bg-green-500 text-white w-full h-full py-4 rounded-md">
                Añadir al carrito
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
