'use client'

import React from 'react'
import { useStoreContext } from '../context/store-context'

export const CategoryTitle = ({ children }) => {
  const { currentCategory } = useStoreContext()

  return (
    <>
      <h2>{currentCategory.name}</h2>
      { children }
    </>
  )
}
