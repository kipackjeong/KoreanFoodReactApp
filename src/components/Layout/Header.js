import React from 'react'
import styles from './Header.module.css'
import Button from '../UI/Button'
import cartIcon from '../../assets/icons/cart-icon.png'
const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>
        <h1>KoreanMeals</h1>
      </div>
      <div className={styles['cart-btn-container']}>
        <Button className={styles['cart-btn']} onClick={props.onCartClicked}>
          <img src={cartIcon} alt="cart icon" />
        </Button>
      </div>
    </header>
  )
}

export default Header
