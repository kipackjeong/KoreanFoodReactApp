import React from 'react'
import styles from './CartItem.module.css'

const CartItem = (props) => {
  return (
    <>
      <td>
        <img className={styles.img} src={props.item.img} alt={props.name} />
      </td>
      <td>{props.item.name}</td>
      <td> {props.item.amount}</td>
      <td>
        {'$' + props.item.price * props.item.amount} <input type="number" />
      </td>
    </>
  )
}

export default CartItem
