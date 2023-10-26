import React from 'react'
import EmailForm from '../EmailForm/EmailForm'

const Cart = ({ cartItems }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price, 0)
  const totalQuantity = cartItems.length

  return (
    <div className="cart">
      <h2>Корзина</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Общая стоимость: ${totalCost}</p>
      <p>Количество товаров: {totalQuantity}</p>

      <EmailForm />
    </div>
  )
}

export default Cart
