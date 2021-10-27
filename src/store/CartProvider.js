import React from 'react'
import CartContext from './cart-context'

//TODO: Need to finish this portion
const CartProvider = (props) => {
  const addItemHandler = (item) => {}
  const cartContext = {}
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
