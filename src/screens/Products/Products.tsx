import React from 'react'
import { useProducts, ProductsProps } from './useProducts'

const Products: React.FC<ProductsProps> = (props: ProductsProps) => {
  const {} = useProducts(props)

  return (
    <main>
      <h1>Products</h1>
    </main>
  )
}

export default Products
