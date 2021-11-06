import React, { useContext } from 'react'
import styles from './NavBar.module.css'
import Button from '../UI/Button'
import CartCounter from '../Cart/CartCounter'
import CartContext from '../../store/cart-context'
import cartIcon from '../../assets/icons/cart-icon.png'

const NavBar = (props) => {
  const cartCtx = useContext(CartContext)

  return (
    <>
      <div>
        <h1>KoreanMeals</h1>
      </div>
      <div className={styles['cart-btn-container']}>
        <Button className={styles['cart-btn']} onClick={props.onCartClicked}>
          <img src={cartIcon} alt="cart icon" />
        </Button>
        <CartCounter quantity={cartCtx.totalAmount} />
      </div>
    </>
  )
}

export default NavBar
