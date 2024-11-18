import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllProducts } from "../../services/getAllProducts";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const allProducts = getAllProducts();
    const product = allProducts.find((prod) => prod.slug === slug);
    setProduct(product);
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex px-24 py-4 gap-[48px] items-center">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="mb-0 text-[40px]"
          />
        </Link>
        <h4 className="text-[32px] font-medium">
          {product.name ?? "No Label"}
        </h4>
      </div>
      <div className="flex gap-[30px] px-24">
        <div className="">
          <img
            src={product.imageUrl ?? product.name ?? "No Name"}
            alt={product.name ?? "No Name"}
            className="block w-[700px] h-[500px] object-cover border-4 border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <span className="text-[40px] font-medium">
            {formatToIDRCurrency(product.price) ?? `Not For Sale`}
          </span>
          {product.stock > 0 ? (
            product.stock <= 25 ? (
              <span className="font-medium text-yellow-500">
                Stok Hampir Habis
              </span>
            ) : (
              <span className="font-medium text-green-500">Stok Tersedia</span>
            )
          ) : (
            <span className="font-medium text-red-500">
              Stok Tidak Tersedia
            </span>
          )}

          <span className="text-grey-800">
            {product.category ?? "Uncategorized"}
          </span>

          {product.stock > 0 ? (
            <div>
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-white text-center hover:bg-yellow-200 text-black active:bg-yellow-300 rounded-full"
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="mb-0 text-black"
                />
                <span className="font-bold">Tambah Ke Keranjang</span>
              </Button>
            </div>
          ) : (
            <div>
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-white text-center opacity-50 cursor-not-allowed rounded-full"
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="mb-0 text-black"
                />
                <span className="font-bold text-black">
                  Tambah Ke Keranjang
                </span>
              </Button>
            </div>
          )}

          <span className="font-bold">Makna Lukisan</span>
          <p className="max-w-[500px]">
            {product.description ?? "No description."}
          </p>
        </div>
      </div>
    </>
  );
}
