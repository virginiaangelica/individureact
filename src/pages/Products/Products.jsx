import {useEffect, useState } from 'react'
import { getAllProducts } from '../../services/getAllProducts'
import ProductList from '../../components/ProductList/ProductList'
import Navbar from '../../components/Navbar/Navbar'
import RadioButton from '../../components/RadioButton/RadioButton'

 function Products() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    let allProducts = getAllProducts()
    allProducts = (allProducts.length > 0 ? allProducts : [])
    setProducts((prev) => allProducts)
  },[])

  const RadioButtonOpts = [
    
      {
        label: 'All',
        value: 'all'
      },
      {
        label: 'Men\'s Shoes',
        value: 'menshoes'
      },
      {
        label: 'Women\'s Shoes',
        value: 'womenshoes'
      },
    
  ]
  return (
    <>
      <Navbar></Navbar>

      <div className='px-24 py-4 gap-4 mt-4 flex-wrap'>
          <h3 className='font-medium'>Filter</h3>
          <div className='flex gap-2 flex-wrap'>
             <RadioButton options={RadioButtonOpts} defaultValue={'all'}/>
          </div>
      </div>

    <section className='container px-24 py-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-auto'>
          <ProductList products={products}/>
      </div>
    </section>
    </>
  )
}
export default Products