import React, { useState } from 'react'
import CartItem from './CartItem'
import Table from '../UI/Table'
import styles from './Cart.module.css'
import cartIcon from '../../assets/icons/cart-icon.png'
import Button from '../UI/Button'

const getTotalNumberAndPrice = (cart) => {
  let totalNumber = 0
  let totalPrice = 0
  for (var key in cart) {
    totalNumber += cart[key].amount
    totalPrice += cart[key].amount * cart[key].price
  }
  return [totalNumber, totalPrice]
}

const Cart = (props) => {
  const cartLength = Object.keys(props.cart).length
  const [totalNumber, totalPrice] = getTotalNumberAndPrice(props.cart)

  const display =
      cartLength === 0 ? (
        <div>
          <h1> The cart is empty </h1>
        </div>
      ) : (
        <Table
          heads={['NAME', 'QTY', 'PRICE']}
          foots={[totalNumber, totalPrice]}
        >
          {Object.keys(props.cart).map((meal, i) => (
            <tr key={i}>
              <CartItem item={props.cart[meal]}></CartItem>
            </tr>
          ))}
        </Table>
      ),
    button =
      cartLength === 0 ? (
        <Button onClick={props.onCancel}> Cancel </Button>
      ) : (
        <>
          <Button onClick={props.onCancel}>Cancel</Button>
          <Button onClick={props.onOrder}>Order</Button>
        </>
      )

  return (
    <div className={styles.cart}>
      <div className={styles['cart-icon-container']}>
        <img src={cartIcon} alt="cart icon" />
      </div>
      <div className={styles['table-container']}>{display}</div>

      <div>
        <h3>Total Price: {totalPrice} </h3>
      </div>
      <div className={styles['button-container']}>{button}</div>
    </div>
  )
}

export default Cart
