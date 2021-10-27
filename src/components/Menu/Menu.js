import React from 'react'
import styles from './Menu.module.css'
import Meal from './Meal/Meal'
import Card from '../UI/Card'

import kimbobImg from '../../assets/kimbob.jpeg'
import bibimbobImg from '../../assets/bibimbob.jpeg'
import japchaeImg from '../../assets/japchae.jpeg'
import spicyPorkImg from '../../assets/spicy-pork.jpg'
import bulgogiImg from '../../assets/bulgogi.jpeg'
import kimchiSoupImg from '../../assets/kimchi-soup.jpeg'

const dummyMenu = [
  { name: 'Kimbob', price: 9.99, img: kimbobImg },
  { name: 'Bibimbob', price: 11.99, img: bibimbobImg },
  { name: 'Japchae', price: 9.99, img: japchaeImg },
  { name: 'Spicy Pork', price: 11.99, img: spicyPorkImg },
  { name: 'Bulgogi', price: 11.99, img: bulgogiImg },
  { name: 'Kimchi Soup', price: 11.99, img: kimchiSoupImg },
]
const Menu = (props) => {
  const mealsList = (
    <ul className={styles.menu}>
      {dummyMenu.map((meal) => (
        <Meal key={meal.name} meal={meal} onAddClick={props.onAddClick}></Meal>
      ))}
    </ul>
  )
  return (
    <Card>
      <ul className={styles.menu}>{mealsList}</ul>
    </Card>
  )
}

export default Menu
