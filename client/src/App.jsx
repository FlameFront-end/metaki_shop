import Cart from '././components/Cart/Cart'
import EmailForm from './components/EmailForm/EmailForm'
import Modal from './components/Modal/Modal'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'

const App = () => {
	return (
		<div>
			<Nav />
			<div className='container'>
				<Products />
				<div className='email'>
					<EmailForm cartItems={[]} />
				</div>
			</div>
			<Modal>
				<Cart />
			</Modal>
		</div>
	)
}

export default App
