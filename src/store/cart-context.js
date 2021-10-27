import React from 'react'

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  removeItem: () => {},
  addItem: () => {},
})

export default CartContext
