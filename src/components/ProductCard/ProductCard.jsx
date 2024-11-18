import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}` ?? ""}
      className="flex flex-col max-w-[370px] flex-wrap p-[15px] bg-clip-padding bg-repeat rounded-lg"
      style={{
        backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20210622/pngtree-metallic-gradient-background-golden-silver-texture-background-image_730998.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center mb-4">
        <img
          src={product?.imageUrl ?? ""}
          alt={product?.name ?? "No Title"}
          className="block max-h-[300px] rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        <h4 className="font-medium text-[20px] text-white">
          {product?.name ?? "No Title"}
        </h4>
        <span className="block font-medium text-[14px] text-[#eaeaea]">
          {product?.category ?? "Uncategorized"}
        </span>
        <span className="block font-medium text-[20px] text-white">
          {product?.price > 0
            ? formatToIDRCurrency(product.price)
            : "Not For Sale"}
        </span>
        <div className="flex flex-col items-center mt-auto">
          {product.stock <= 0 ? (
            <p className="text-xl font-bold text-center text-red-500">
              Stok Tidak Tersedia
            </p>
          ) : product.stock <= 25 && product.stock !== 0 ? (
            <>
              <p className="text-xm font-bold text-start text-yellow-400 mt-6">
                Stok Hampir Habis
              </p>
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-white text-center hover:bg-yellow-200 text-black active:bg-yellow-300 mt-4 rounded-full"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Tambah Ke Keranjang</span>
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-white text-center hover:bg-yellow-200 text-black active:bg-yellow-300 mt-4 rounded-full"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Tambah Ke Keranjang</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.prototypes = {
  product: PropTypes.object.isRequired,
};
