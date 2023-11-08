import React, { useEffect, useState } from 'react'

import Cart from '././components/Cart/Cart'
import EmailForm from './components/EmailForm/EmailForm'
import Modal from './components/Modal/Modal'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'

const App = () => {
	const [cart, setCart] = useState([])
	const [active, setActive] = useState(false)

	const [totalQuantity, setTotalQuantity] = useState(0)

	const handleTotalQuantityChange = newTotalQuantity => {
		setTotalQuantity(newTotalQuantity)
	}

	const addToCart = item => {
		setCart([...cart, { ...item, quantity: 1 }])
	}

	const updateQuantity = (index, newQuantity) => {
		const updatedCart = [...cart]
		if (newQuantity <= 0) {
			updatedCart.splice(index, 1)
		} else {
			updatedCart[index].quantity = newQuantity
		}
		setCart(updatedCart)
	}

	const removeItem = index => {
		const updatedCart = [...cart]
		updatedCart.splice(index, 1)
		setCart(updatedCart)
	}

	const openCart = () => {
		setActive(prevState => !prevState)
	}

	return (
		<div>
			<Nav quantity={totalQuantity} openCart={openCart} />
			<div className='container'>
				<Products addToCart={addToCart} cart={cart} setCart={setCart} />
				<div className='email'>
					<EmailForm cartItems={cart} />
				</div>
			</div>
			<Modal
				active={active}
				closeModal={() => {
					setActive(false)
				}}
			>
				<Cart
					cartItems={cart}
					updateQuantity={updateQuantity}
					removeItem={removeItem}
					onTotalQuantityChange={handleTotalQuantityChange}
				/>
			</Modal>
		</div>
	)
}

export default App
