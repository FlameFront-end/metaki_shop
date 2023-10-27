import React from 'react'

import EmailForm from '../EmailForm/EmailForm'

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
	function extractNumberFromString(str) {
		const numberString = str.replace(/[^\d.-]/g, '')
		return parseFloat(numberString)
	}

	const totalCost = cartItems.reduce(
		(total, item) =>
			total + extractNumberFromString(item.price) * item.quantity,
		0
	)
	const totalQuantity = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	)

	return (
		<div className='cart'>
			<h2>Корзина</h2>
			<ul>
				{cartItems.map((item, index) => (
					<li key={index}>
						{item.title} - {item.price} x {item.quantity}
						<button onClick={() => updateQuantity(index, item.quantity + 1)}>
							+
						</button>
						<button onClick={() => updateQuantity(index, item.quantity - 1)}>
							-
						</button>
						<button onClick={() => removeItem(index)}>Удалить</button>
					</li>
				))}
			</ul>
			<p>Общая стоимость: {totalCost}</p>
			<p>Количество товаров: {totalQuantity}</p>

			<EmailForm />
		</div>
	)
}

export default Cart
