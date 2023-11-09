import { Alert, Collapse } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cart from '././components/Cart/Cart'
import EmailForm from './components/EmailForm/EmailForm'
import Modal from './components/Modal/Modal'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'

const App = () => {
	const { activeAlertSuccess, activeAlertRejected } = useSelector(
		state => state.alertReducer
	)

	useEffect(() => {
		console.log(activeAlertSuccess)
	}, [activeAlertSuccess])

	return (
		<>
			<Nav />
			<div className='container'>
				<Products />
				<div className='email'>
					<EmailForm />
				</div>
			</div>
			<Modal>
				<Cart />
			</Modal>

			<Collapse in={activeAlertSuccess} className='alert'>
				<Alert variant='outlined' severity='success'>
					Письмо успешно отправлено!
				</Alert>
			</Collapse>
			<Collapse in={activeAlertRejected} className='alert'>
				<Alert variant='outlined' severity='error'>
					Произошла ошибка! Попробуйте ещё раз.
				</Alert>
			</Collapse>
		</>
	)
}

export default App
