import React, { useState } from 'react'
import Card from './components/Card/Card'
import Cart from '././components/Cart/Cart'

const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const products = [
    { name: 'Товар 1', price: 10 },
    { name: 'Товар 2', price: 15 },
    { name: 'Товар 3', price: 20 },
  ]

  return (
    <div>
      <h1>Магазин товаров</h1>
      <div>{cart.length}</div>
      <div className="products">
        {products.map((product, index) => (
          <Card key={index} name={product.name} price={product.price} onAddToCart={() => addToCart(product)} />
        ))}
      </div>
      <Cart cartItems={cart} />
    </div>
  )
}

export default App
