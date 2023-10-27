import { ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, Button } from '@mui/material'

import './Nav.scss'

const Nav = ({ openCart }) => {
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
				<a className='link' href={item.link} key={id}>
					{item.text}
				</a>
			))}
			<Button
				variant='outlined'
				style={{ color: 'white' }}
				startIcon={<ShoppingCartOutlined />}
				onClick={openCart}
			>
				<Badge color='primary'>Корзина</Badge>
			</Button>
		</nav>
	)
}

export default Nav
