'use client'

import { useStoreContext } from "@/src/context/store-context"

export default function Checkout() {
  const { cart, removeFromCart, postOrder } = useStoreContext()


  return (
    <section>
      <h1>Checkout</h1>
      { cart.length < 1
        ? <span>There is no product on your cart</span>
        : (
          <div>
            {cart.map(item => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove product</button>
              </div>
            ))}
          </div>
      )}

      <button style={{border: '1px solid orange'}} onClick={postOrder}>Place Order</button>
    </section>
  )
}