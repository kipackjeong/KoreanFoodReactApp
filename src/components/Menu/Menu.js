import React, { useContext } from 'react'
import styles from './Menu.module.css'
import Meal from './Meal/Meal'
import Card from '../UI/Card'
import CartContext from '../../store/cart-context'
import kimbobImg from '../../assets/kimbob.jpeg'
import bibimbobImg from '../../assets/bibimbob.jpeg'
import japchaeImg from '../../assets/japchae.jpeg'
import spicyPorkImg from '../../assets/spicy-pork.jpg'
import bulgogiImg from '../../assets/bulgogi.jpeg'
import kimchiSoupImg from '../../assets/kimchi-soup.jpeg'

const dummyMenu = [
  { id: 1, name: 'Kimbob', price: 9.99, img: kimbobImg },
  { id: 2, name: 'Bibimbob', price: 11.99, img: bibimbobImg },
  { id: 3, name: 'Japchae', price: 9.99, img: japchaeImg },
  { id: 4, name: 'Spicy Pork', price: 11.99, img: spicyPorkImg },
  { id: 5, name: 'Bulgogi', price: 11.99, img: bulgogiImg },
  { id: 6, name: 'Kimchi Soup', price: 11.99, img: kimchiSoupImg },
]

const Menu = (props) => {
  const cartCtx = useContext(CartContext)

  const onAddClickHandler = (event, meal) => {
    event.preventDefault()
    if (meal.amount === 0) {
      return
    }
    cartCtx.addItem(meal)
  }

  const mealsList = dummyMenu.map((meal) => (
    <Meal key={meal.name} meal={meal} onAddClick={onAddClickHandler}></Meal>
  ))

  return (
    <Card>
      <ul className={styles.menu}>{mealsList}</ul>
    </Card>
  )
}

export default Menu
