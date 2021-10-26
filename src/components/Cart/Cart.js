import React, { useState } from 'react'
import CartItem from './CartItem'
import styles from './Cart.module.css'
import cartIcon from '../../assets/icons/cart-icon.png'
import Button from '../UI/Button'

const Cart = (props) => {
  const getTotalNumberAndPrice = (cart) => {
    let totalNumber = 0
    let totalPrice = 0
    for (var key in cart) {
      totalNumber += cart[key].amount
      totalPrice += cart[key].amount * cart[key].price
    }
    return [totalNumber, totalPrice]
  }

  const cartLength = Object.keys(props.cart).length
  const [totalNumber, totalPrice] = getTotalNumberAndPrice(props.cart)

  return (
    <div className={styles.cart}>
      <div className={styles['cart-icon-container']}>
        <img src={cartIcon} alt="cart icon" />
      </div>
      <div className={styles['table-container']}>
        {cartLength === 0 ? (
          <div>
            <h1> The cart is empty </h1>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th> </th>
                <th> NAME</th>
                <th> QTY </th>
                <th> PRICE </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(props.cart).map((meal, i) => (
                <tr key={i}>
                  <CartItem item={props.cart[meal]}></CartItem>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>Total</td>
                <td>{totalNumber}</td>
                <td>{`$${totalPrice.toFixed(2)}`}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div className={styles['button-container']}>
        {cartLength === 0 ? (
          <Button onClick={props.onCancel}> Cancel </Button>
        ) : (
          <>
            <Button onClick={props.onCancel}>Cancel</Button>
            <Button onClick={props.onOrder}>Order</Button>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
