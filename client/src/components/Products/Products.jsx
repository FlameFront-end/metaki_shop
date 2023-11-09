import { Alert, Collapse } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { products } from '../../data'
import { cartSlice } from '../../redux/reducers/cartSlice'
import Card from '../ProductCard/Card'

const Products = () => {
	const [openAlert, setOpenAlert] = useState(false)

	const { addToCart } = cartSlice.actions
	const dispatch = useDispatch()

	return (
		<>
			<div className='products'>
				{products.map((product, index) => (
					<Card
						key={index}
						img={product.img}
						title={product.title}
						subtitle={product.subtitle}
						descr={product.descr}
						price={product.price}
						optionsTitle={product.optionsTitle}
						options={product.options}
						onAddToCart={() => {
							dispatch(addToCart(product, index))
							setOpenAlert(true)
							setTimeout(() => {
								setOpenAlert(false)
							}, 3000)
						}}
					/>
				))}
			</div>
			<Collapse in={openAlert} className='alert'>
				<Alert variant='outlined' severity='success'>
					Товар добавлен в корзину!
				</Alert>
			</Collapse>
		</>
	)
}

export default Products
