import React from 'react'
import styles from './Meal.module.css'
import StickyNote from '../../UI/StickyNote'
import MealForm from './MealForm/MealForm'
const Meal = (props) => {
  const onAddClickHandler = (event) => {
    props.onAddClick(event, props.meal)
  }
  return (
    <StickyNote>
      <div className={styles.meal}>
        <h4> {props.meal.name}</h4>
        <img src={props.meal.img} alt={`${props.meal.name}`}></img>
        <h5> $ {props.meal.price} </h5>
        <MealForm onAddClick={onAddClickHandler}></MealForm>
      </div>
    </StickyNote>
  )
}

export default Meal
