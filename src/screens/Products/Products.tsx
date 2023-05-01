import React from 'react'
import { useProducts, ProductsProps } from './useProducts'

const Products: React.FC<ProductsProps> = (props: ProductsProps) => {
  const {} = useProducts(props)

  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}

export default Products
