import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useOutsideClick } from '../../hooks/useOutsideClick'

import { cartSlice } from '../../redux/cartSlice'

import './Modal.scss'

const Modal = ({ children }) => {
	const dispatch = useDispatch()
	const { toggleCart } = cartSlice.actions
	const { activeModal } = useSelector(state => state.cartReducer)

	const ref = useOutsideClick(() => {
		dispatch(toggleCart(false))
	})

	return (
		<div className={`modal ${activeModal ? 'active' : ''}`}>
			<div
				className='modal__content'
				ref={ref}
				style={{ borderRadius: '10px' }}
			>
				{children}
				<div
					className='modal__content__close'
					onClick={() => dispatch(toggleCart(false))}
				>
					<i className='bx bx-x'></i>
				</div>
			</div>
		</div>
	)
}

export default Modal
