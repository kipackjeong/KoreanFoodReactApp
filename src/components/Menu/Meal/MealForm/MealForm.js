import React from 'react'
import styles from './MealForm.module.css'
import Button from '../../../UI/Button'
const MealForm = (props) => {
  return (
    <form className={styles.form} onSubmit={props.onAddClick}>
      <input type="number" name="amount" min="0" defaultValue={0}></input>
      <Button type="submit">Add</Button>
    </form>
  )
}

export default MealForm
