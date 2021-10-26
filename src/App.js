import { useState } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart'
import Modal from './components/UI/Modal'
function App() {
  const [cartClicked, setCartClicked] = useState(false)
  const [cart, setCart] = useState({})

  const onCartClickedHandler = (event) => {
    setCartClicked(cartClicked ? false : true)
  }
  const onAddClickHandler = (event, meal) => {
    event.preventDefault()
    const amount = parseInt(event.target.amount.value)
    const mealName = meal.name
    if (!cart[mealName]) {
      cart[mealName] = meal
    }

    cart[mealName].amount = cart[mealName].amount
      ? cart[mealName].amount + amount
      : amount

    setCart(cart)
  }

  const onCancelHandler = () => {
    setCartClicked(false)
  }
  const onOrderHandler = () => {
    console.log(
      'ordering ' +
        Object.keys(cart)
          .map((item) => `${cart[item].amount} ${cart[item].name}`)
          .join(', '),
    )
    setCart({})
    setCartClicked(false)
  }

  return (
    <div className="App">
      <Header onCartClicked={onCartClickedHandler} />
      {cartClicked && (
        <Modal>
          <Cart
            onCancel={onCancelHandler}
            onOrder={onOrderHandler}
            cart={cart}
          ></Cart>
        </Modal>
      )}
      <Main>
        <Menu onAddClick={onAddClickHandler}></Menu>
      </Main>
    </div>
  )
}

export default App
