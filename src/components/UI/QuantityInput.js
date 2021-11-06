import React from 'react'
import styles from './QuantityInput.module.css'
const QuantityInput = (props) => {
  return (
    <input
      className={styles.quantity}
      name="amount"
      type="number"
      defaultValue={props.defaultValue}
      min="0"
      onChange={props.onChange}
    ></input>
  )
}

export default QuantityInput
