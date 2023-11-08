import { Alert, Button, Collapse, Stack, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const EmailForm = () => {
	const URL_BACK = process.env.REACT_APP_API_URL
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [tel, setTel] = useState('')
	const [lot, setLot] = useState('')

	const [openAlertSuccess, setOpenAlertSuccess] = useState(false)
	const [openAlertRejected, setOpenAlertRejected] = useState(false)

	const { cartItems } = useSelector(state => state.cartReducer)

	const cartItemsFormatted = cartItems.map(item => {
		return `${item.title} (Кол-во: ${item.quantity}) - Стоимость: ${item.price}`
	})

	const handleSubmit = async () => {
		try {
			const cartItemsMessage = cartItemsFormatted.join('\n')
			const message = `Name: ${name}\nEmail: ${email}\nTel: ${tel}\nLot: ${lot}\n\nCart Items:\n${cartItemsMessage}`

			const response = await axios.post(`${URL_BACK}/mail`, {
				message
			})

			if (response.status === 200) {
				console.log('Письмо отправлено успешно')
				setOpenAlertSuccess(true)
				setTimeout(() => {
					setOpenAlertSuccess(false)
				}, 3000)
			} else {
				console.error('Ошибка отправки письма')
				setOpenAlertRejected(true)
				setTimeout(() => {
					setOpenAlertRejected(false)
				}, 3000)
			}
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return (
		<>
			<Collapse in={openAlertSuccess} className='alert'>
				<Alert variant='outlined' severity='success'>
					Письмо успешно отправлено!
				</Alert>
			</Collapse>
			<Collapse in={openAlertRejected} className='alert'>
				<Alert variant='outlined' severity='error'>
					Произошла ошибка! Попробуйте ещё раз.
				</Alert>
			</Collapse>
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
					required
				/>
				<Button onClick={handleSubmit} variant='outlined'>
					Отправить
				</Button>
			</Stack>
		</>
	)
}

export default EmailForm
