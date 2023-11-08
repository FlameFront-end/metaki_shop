import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cart from '././components/Cart/Cart'
import EmailForm from './components/EmailForm/EmailForm'
import Modal from './components/Modal/Modal'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'

import { cartSlice } from './redux/cartSlice'

const App = () => {
	const {} = useSelector(state => state.cartReducer)
	const {} = cartSlice.actions
	const dispatch = useDispatch()

	const [activeModal, setActiveModal] = useState(false)

	const openCart = () => {
		setActiveModal(prevState => !prevState)
	}

	return (
		<div>
			<Nav quantity={0} openCart={openCart} />
			<div className='container'>
				<Products />
				<div className='email'>
					<EmailForm cartItems={[]} />
				</div>
			</div>
			<Modal
				active={activeModal}
				closeModal={() => {
					setActiveModal(false)
				}}
			>
				<Cart />
			</Modal>
		</div>
	)
}

export default App
