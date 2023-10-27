import React from 'react'

import './Card.scss'

const Card = ({
	img,
	title,
	subtitle,
	descr,
	optionsTitle,
	options,
	price,
	onAddToCart
}) => {
	return (
		<div className='card'>
			<div className='img' style={{ backgroundImage: `url(${img})` }} />
			<div className='text'>
				<h3 className='title'>{title}</h3>
				<div className='subtitle'>{subtitle}</div>
				<div className='price'>{price}</div>
				<button className='btn' onClick={onAddToCart}>
					Заказать
				</button>
				{descr && <p className='descr'>{descr}</p>}
				{options && (
					<div className='options'>
						<div className='options-title'>{optionsTitle}:</div>
						<ul>
							{options.map((item, index) => (
								<li className='option' key={index}>
									{item}
									{index !== options.length - 1 ? ',' : '.'}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default Card
