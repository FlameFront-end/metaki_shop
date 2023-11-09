import { Alert, Button, Collapse, Stack, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { alertSlice } from '../../redux/reducers/alertSlice'
import { cartSlice } from '../../redux/reducers/cartSlice'

const EmailForm = () => {
	const URL_BACK = process.env.REACT_APP_API_URL
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [tel, setTel] = useState('')
	const [lot, setLot] = useState('')

	const dispatch = useDispatch()

	const { cartItems } = useSelector(state => state.cartReducer)
	const { toggleAlertRejected, toggleAlertSuccess } = alertSlice.actions

	const { toggleCart } = cartSlice.actions

	const cartItemsFormatted = cartItems.map(item => {
		return `${item.title} (Кол-во: ${item.quantity}) - Стоимость: ${item.price}`
	})

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			const cartItemsMessage = cartItemsFormatted.join('\n')
			const message = `Name: ${name}\nEmail: ${email}\nTel: ${tel}\nLot: ${lot}\n\nCart Items:\n${cartItemsMessage}`

			const response = await axios.post(`${URL_BACK}/mail`, {
				message
			})

			if (response.status === 200) {
				console.log('Письмо отправлено успешно')
				dispatch(toggleAlertSuccess(true))
				setTimeout(() => {
					dispatch(toggleAlertSuccess(false))
				}, 3000)
				dispatch(toggleCart(false))
			} else {
				console.error('Ошибка отправки письма')
				dispatch(toggleAlertRejected(true))
				setTimeout(() => {
					dispatch(toggleAlertRejected(false))
				}, 3000)
				dispatch(toggleCart(false))
			}
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Stack direction='column' spacing={2} sx={{ marginTop: '15px' }}>
					<TextField
						id='name'
						label='Ваше имя'
						variant='filled'
						onChange={e => setName(e.target.value)}
						value={name}
						type='text'
						required
					/>
					<TextField
						id='email'
						label='Ваш Email'
						variant='filled'
						onChange={e => setEmail(e.target.value)}
						value={email}
						type='email'
						required
					/>
					<TextField
						id='tel'
						label='Ваш телефон'
						variant='filled'
						type='tel'
						onChange={e => setTel(e.target.value)}
						value={tel}
						required
					/>

					<TextField
						id='lot'
						label='Номер лота'
						variant='filled'
						onChange={e => setLot(e.target.value)}
						value={lot}
						type='text'
					/>
					<Button variant='outlined' type='submit'>
						Отправить
					</Button>
				</Stack>
			</form>
		</>
	)
}

export default EmailForm
