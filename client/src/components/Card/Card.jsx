import React from 'react'

const Card = ({ name, price, onAddToCart }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Цена: ${price}</p>
      <button onClick={onAddToCart}>Добавить в корзину</button>
    </div>
  )
}

export default Card
