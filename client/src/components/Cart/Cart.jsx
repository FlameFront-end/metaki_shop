import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { Divider, List, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { cartSlice } from '../../redux/cartSlice'
import { extractNumberFromString } from '../../utils/extractNumberFromString'
import EmailForm from '../EmailForm/EmailForm'

const Cart = () => {
	const dispatch = useDispatch()
	const { cartItems } = useSelector(state => state.cartReducer)
	const { removeItem, incQuantity, decQuantity } = cartSlice.actions

	const calculateItemCost = item => {
		return extractNumberFromString(item.price) * item.quantity
	}

	const calculateTotalCost = () => {
		return cartItems.reduce((total, item) => total + calculateItemCost(item), 0)
	}

	const calculateTotalQuantity = () => {
		return cartItems.reduce((total, item) => total + item.quantity, 0)
	}

	const incrementQuantity = index => {
		dispatch(incQuantity(index))
	}

	const decrementQuantity = index => {
		dispatch(decQuantity(index))
	}

	const removeItemFromCart = index => {
		dispatch(removeItem(index))
	}

	const totalCost = calculateTotalCost()
	const totalQuantity = calculateTotalQuantity()

	if (!cartItems.length) {
		return (
			<div style={{ textAlign: 'center', color: 'red' }}>Корзина пуста</div>
		)
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
							<button onClick={() => decrementQuantity(index)}>
								<RemoveCircleOutlineIcon />
							</button>
							<div>{item.quantity}</div>
							<button onClick={() => incrementQuantity(index)}>
								<AddCircleOutlineIcon />
							</button>
						</Stack>
						<div>{calculateItemCost(item)}</div>
						<button onClick={() => removeItemFromCart(index)}>
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
