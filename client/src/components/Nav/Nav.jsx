import { ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, Button, Link } from '@mui/material'

import './Nav.scss'

const Nav = ({ openCart, quantity }) => {
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
			<Badge badgeContent={quantity} color='primary'>
				<Button
					variant='outlined'
					style={{ color: 'white' }}
					startIcon={<ShoppingCartOutlined />}
					onClick={openCart}
				>
					<Badge color='primary'>Корзина</Badge>
				</Button>
			</Badge>
		</nav>
	)
}

export default Nav
