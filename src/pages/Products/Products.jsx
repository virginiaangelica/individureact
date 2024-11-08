import {useEffect, useState } from 'react'
import { getAllProducts } from '../../services/getAllProducts'
import ProductList from '../../components/ProductList/ProductList'

 function Products() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    let allProducts = getAllProducts()
    allProducts = (allProducts.length > 0 ? allProducts : [])
    setProducts((prev) => allProducts)
  },[])
  return (
    <section className='container px-24 py-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-auto'>
          <ProductList products={products}/>
      </div>
    </section>
  )
}
export default Products