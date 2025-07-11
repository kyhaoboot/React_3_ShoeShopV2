import React, { useState } from "react";
import Shoe from "./shoe";
import data from "./data.json";
import ShoeDetail from "./shoeDetail";
export default function ShoeShop() {
  const [ListProduct, setListProduct] = useState(data);
  const [ProductDetail, setProductDetail] = useState(ListProduct[0]);

  const renderListProduct = () => {
    return ListProduct.map((product) => {
      return (
        <Shoe
          key={product.id}
          product={product}
          getProduct={handleGetProduct}
        />
      );
    });
  };

  const handleGetProduct = (product) => {
    setProductDetail(product);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center mb-5 uppercase">Shoe Shop</h1>
      <div className="grid grid-cols-4 gap-6">{renderListProduct()}</div>
    </div>
  );
}
