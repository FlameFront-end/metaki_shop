import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { Divider, List, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'

import EmailForm from '../EmailForm/EmailForm'

const Cart = ({
	cartItems,
	updateQuantity,
	removeItem,
	onTotalQuantityChange
}) => {
	function extractNumberFromString(str) {
		const numberString = str.replace(/[^\d.-]/g, '')
		return parseFloat(numberString)
	}

	const [totalQuantity, setTotalQuantity] = useState(0)

	const totalCost = cartItems.reduce(
		(total, item) =>
			total + extractNumberFromString(item.price) * item.quantity,
		0
	)

	useEffect(() => {
		setTotalQuantity(
			cartItems.reduce((total, item) => total + item.quantity, 0)
		)
		onTotalQuantityChange(totalQuantity)
	}, [cartItems, onTotalQuantityChange, totalQuantity])

	if (totalQuantity === 0) {
		return <h2 style={{ textAlign: 'center' }}>Корзина пуста</h2>
	}

	return (
		<div className='cart'>
			<h2 style={{ textAlign: 'center' }}>Корзина</h2>
			<List sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				{cartItems.map((item, index) => (
					<Stack
						key={index}
						className='item'
						alignItems='center'
						justifyContent='space-between'
						display='flex'
						direction='row'
					>
						<img src={item.img} alt='' width={100} height={100} />
						<div className='text'>{item.title}</div>
						<div>{item.price}</div>
						<Stack
							display='flex'
							direction='row'
							spacing={1}
							alignItems='center'
						>
							<button onClick={() => updateQuantity(index, item.quantity - 1)}>
								<RemoveCircleOutlineIcon />
							</button>
							<div>{item.quantity}</div>
							<button onClick={() => updateQuantity(index, item.quantity + 1)}>
								<AddCircleOutlineIcon />
							</button>
						</Stack>
						<div>{extractNumberFromString(item.price) * item.quantity}</div>
						<button onClick={() => removeItem(index)}>
							<HighlightOffIcon />
						</button>
					</Stack>
				))}
			</List>
			<div>
				<Divider variant='middle' sx={{ margin: '20px 0' }} />
				<Stack textAlign='end' gap={1}>
					<div>Сумма: {totalCost}</div>
					<div>Количество товаров: {totalQuantity}</div>
				</Stack>
			</div>
			<EmailForm />
		</div>
	)
}

export default Cart
