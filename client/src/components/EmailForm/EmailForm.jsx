import { Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EmailForm = ({ cartItems }) => {
	const URL_BACK = process.env.REACT_APP_API_URL
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [tel, setTel] = useState('')
	const [lot, setLot] = useState('')

	// function extractNumberFromString(str) {
	// 	const numberString = str.replace(/[^\d.-]/g, '')
	// 	return parseFloat(numberString)
	// }

	// const getCartItems = () => {
	// 	if (cartItems) {
	// 		const items = Object.values(cartItems)
	// 				.map(
	// 						item =>
	// 								`Name: ${item.title}, Price: ${
	// 										extractNumberFromString(item.price) * item.quantity
	// 								}`
	// 				)
	// 				.join('\n')
	//
	// 		return items
	// 	} else {
	// 		return ''
	// 	}
	// }

	// useEffect(() => {
	// 	console.log(cartItems)
	// }, [cartItems])

	const handleSubmit = async () => {
		try {
			const message = `Name: ${name}\nEmail: ${email}\nTel: ${tel}\nLot: ${lot}\n`

			const response = await axios.post(`${URL_BACK}/mail`, {
				message
			})

			if (response.status === 200) {
				console.log('Письмо отправлено успешно')
			} else {
				console.error('Ошибка отправки письма')
			}
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return (
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
	)
}

export default EmailForm
