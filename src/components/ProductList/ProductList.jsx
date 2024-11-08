import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductList({products}) {
  return (
    <>
      {products.length > 0 && (
        products.map((product, index) => 
        <>
            <ProductCard product={product} index={index} key={product?.id ?? index} />
        </>)
      )}
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}