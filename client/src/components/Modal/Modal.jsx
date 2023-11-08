import React, { useEffect } from 'react'

import { useOutsideClick } from '../../hooks/useOutsideClick'

import './Modal.scss'

const Modal = ({ active, children, id, closeModal }) => {
	const ref = useOutsideClick(() => {
		closeModal()
	})

	return (
		<div className={`modal ${active ? 'active' : ''}`} id={id}>
			<div
				className='modal__content'
				ref={ref}
				style={{ borderRadius: '10px' }}
			>
				{children}
				<div className='modal__content__close' onClick={closeModal}>
					<i className='bx bx-x'></i>
				</div>
			</div>
		</div>
	)
}

export default Modal
