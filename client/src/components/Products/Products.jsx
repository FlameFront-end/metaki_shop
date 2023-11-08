import { Alert, Collapse } from '@mui/material'
import { useState } from 'react'

import { products } from '../../data'
import Card from '../ProductCard/Card'

const Products = ({ addToCart, cart, setCart }) => {
	const [open, setOpen] = useState(false)

	return (
		<>
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
							const existingItem = cart.find(
								item => item.title === product.title
							)
							if (existingItem) {
								const updatedCart = cart.map(item => {
									if (item.title === product.title) {
										return { ...item, quantity: item.quantity + 1 }
									}
									return item
								})
								setCart(updatedCart)
							} else {
								addToCart(product)
							}
							setOpen(true)
							setTimeout(() => {
								setOpen(false)
							}, 3000)
						}}
					/>
				))}
			</div>
			<Collapse in={open} className='alert'>
				<Alert variant='outlined' severity='success'>
					Товар добавлен в корзину!
				</Alert>
			</Collapse>
		</>
	)
}

export default Products
