import React, { useContext, useEffect, useState } from 'react'
import styles from './CartCounter.module.css'
import CartContext from '../../store/cart-context'

const CartCounter = (props) => {
  const cartCtx = useContext(CartContext)
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

  const counterClasses = `${styles.counter} ${
    btnIsHighlighted ? styles.bump : ''
  }`
  useEffect(() => {
    if (cartCtx.totalAmount === 0) {
      return
    }
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [cartCtx.totalAmount])
  return (
    <div className={counterClasses}>
      <span>{props.quantity} </span>
    </div>
  )
}

export default CartCounter
