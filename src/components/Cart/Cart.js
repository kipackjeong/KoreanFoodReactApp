import React, { useContext, useState } from 'react'
import CartItem from './CartItem'
import Table from '../UI/Table'
import styles from './Cart.module.css'
import cartIcon from '../../assets/icons/cart-icon.png'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const cartLength = Object.keys(cartCtx.items).length

  const display =
    cartLength === 0 ? (
      <div>
        <h1> The cart is empty </h1>
      </div>
    ) : (
      <Table heads={['NAME', 'QTY', 'PRICE']}>
        {Object.keys(cartCtx.items).map((meal, i) => (
          <CartItem key={i} item={{ ...cartCtx.items[meal] }}></CartItem>
        ))}
      </Table>
    )
  const button =
    cartLength === 0 ? (
      <Button onClick={props.onCancel}> Cancel </Button>
    ) : (
      <>
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button onClick={props.onOrder}>Order</Button>
      </>
    )

  return (
    <div id="cart" className={styles.cart}>
      <div className={styles['cart-icon-container']}>
        <img src={cartIcon} alt="cart icon" />
      </div>
      <div className={styles['table-container']}>{display}</div>
      <div>
        <h3>Total Order: {cartCtx.totalAmount} </h3>
        <h3>Total Price: {`$${cartCtx.totalPrice.toFixed(2)}`} </h3>
      </div>
      <div className={styles['button-container']}>{button}</div>
    </div>
  )
}

export default Cart
