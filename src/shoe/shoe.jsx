import { useState } from "react";
import ShoeDetail from "./shoeDetail";

export default function Shoe(props) {
  const { product } = props;
  const [showDetail, setShowDetail] = useState(false);
  // console.log(props);
  const handleShowDetail = () => {
    setShowDetail(true);
  };
  const handleCloseDetail = () => {
    setShowDetail(false);
  };
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={product.image} />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </a>
          <p className="mb-2   tracking-tight text-gray-900 dark:text-white">
            {product.price} $
          </p>
          {/* Modal toggle */}

          {/* <ShoeDetail /> */}
          {/* <ShoeDetail /> */}

          <button
            onClick={handleShowDetail}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Chi Tiết
          </button>
        </div>
      </div>
      {showDetail && (
        <ShoeDetail product={product} onClose={handleCloseDetail} />
      )}
    </div>

    /////////////////////////////////
  );
}
