'use client'

import { createContext, useContext, useState } from "react"

const AppContext = createContext()

const ContextProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState({})

  const handleCurrentCategory = (category) => {
    setCurrentCategory(category)
  }

  const valuesContext = {
    currentCategory,
    test: 'hello context',
    handleCurrentCategory
  }

  return(
    <AppContext.Provider value={valuesContext}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider


export const useStoreContext = () => useContext(AppContext)
