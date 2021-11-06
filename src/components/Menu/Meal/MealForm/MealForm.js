import React from 'react'
import styles from './MealForm.module.css'
import Button from '../../../UI/Button'
import QuantityInput from '../../../UI/QuantityInput'
const MealForm = (props) => {
  return (
    <form className={styles.form} onSubmit={props.onAddClick}>
      <QuantityInput
        type="number"
        name="amount"
        min="0"
        defaultValue={0}
      ></QuantityInput>
      <Button type="submit">Add</Button>
    </form>
  )
}

export default MealForm
