'use client'

import React from 'react'
import { useStoreContext } from '../context/store-context'

export const ProductCard = ({ product }) => {
  const { addToCart } = useStoreContext()
  
  return (
    <div className="card">
      <span>{product.category.icon}</span>
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to order</button>
    </div>
  )
}
