import React from 'react'

import { products } from '../../data'
import Card from '../ProductCard/Card'

const Products = ({ addToCart, cart, setCart }) => {
	return (
		<div className='products'>
			{products.map((product, index) => (
				<Card
					key={index}
					img={product.img}
					title={product.title}
					subtitle={product.subtitle}
					descr={product.descr}
					price={product.price}
					optionsTitle={product.optionsTitle}
					options={product.options}
					onAddToCart={() => {
						// Проверяем, есть ли товар уже в корзине
						const existingItem = cart.find(item => item.title === product.title)

						if (existingItem) {
							// Если товар уже есть в корзине, увеличиваем его количество
							const updatedCart = cart.map(item => {
								if (item.title === product.title) {
									return { ...item, quantity: item.quantity + 1 }
								}
								return item
							})

							setCart(updatedCart)
						} else {
							// Если товара нет в корзине, добавляем его
							addToCart(product)
						}
					}}
				/>
			))}
		</div>
	)
}

export default Products
