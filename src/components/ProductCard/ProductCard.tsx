import React from 'react'
import { useProductCard, ProductCardProps } from './useProductCard'

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const {} = useProductCard(props)

  return <div></div>
}

export default ProductCard
