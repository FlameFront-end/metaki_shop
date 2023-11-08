import { ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, Button, Link } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { cartSlice } from '../../redux/cartSlice'

import './Nav.scss'

const Nav = () => {
	const dispatch = useDispatch()
	const { toggleCart } = cartSlice.actions
	const { cartItems } = useSelector(state => state.cartReducer)

	const calculateTotalQuantity = () => {
		return cartItems.reduce((total, item) => total + item.quantity, 0)
	}

	const totalQuantity = calculateTotalQuantity()

	const navLink = [
		{ text: 'О нас', link: '' },
		{ text: 'Стоимость', link: '' },
		{ text: 'Наши работы', link: '' },
		{ text: 'Отправить заказ', link: '' },
		{ text: 'Поставщики', link: '' },
		{ text: 'Производители', link: '' },
		{ text: 'Услуги', link: '' },
		{ text: 'Контакты', link: '' }
	]
	return (
		<nav className='nav'>
			{navLink.map((item, id) => (
				<Link className='link' color='#FFF' href={item.link} key={id}>
					{item.text}
				</Link>
			))}
			<Badge badgeContent={totalQuantity} color='primary'>
				<Button
					variant='outlined'
					style={{ color: 'white' }}
					startIcon={<ShoppingCartOutlined />}
					onClick={() => dispatch(toggleCart(true))}
				>
					<Badge color='primary'>Корзина</Badge>
				</Button>
			</Badge>
		</nav>
	)
}

export default Nav
