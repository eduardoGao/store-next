'use client'

import { createContext, useContext, useState } from "react"

const AppContext = createContext()

const ContextProvider = ({ children }) => {
  const storeContext = useStore()

  return(
    <AppContext.Provider value={storeContext}>
      {children}
    </AppContext.Provider>
  )
}

const useStore = () => {
  const [currentCategory, setCurrentCategory] = useState({})
  const [cart, setCart] = useState([])

  const handleCurrentCategory = (category) => {
    setCurrentCategory(category)
  }

  const addToCart = (product) => {
    if(cart.find(item => item.id === product.id)) return 

    setCart([...cart, product])
  }

  const removeFromCart = (productId) => {
    const filteredItems = cart.filter(item => item.id !== productId)

    setCart(filteredItems)
  }

  const getTotal = () => {
    let initialValue = 0
    
    const total = cart.reduce((accumulated, currentValue) => {
      return accumulated + currentValue.price
    }, initialValue)

    return total
  }

  const postOrder = async () => {
    const body = {
      // username
      name: 'Eduardo',
      total: getTotal(),
      date: Date.now().toString(),
      order: cart,
    }

    // console.log(body);

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          // "Content-Type": "application/json",
        },
      })
      const data = await res.json()
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  return {
    currentCategory,
    handleCurrentCategory,
    cart,
    addToCart,
    removeFromCart,
    postOrder
  }
}

export default ContextProvider


export const useStoreContext = () => useContext(AppContext)
