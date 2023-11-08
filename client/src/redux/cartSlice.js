import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartItems: [],
		activeModal: false
	},
	reducers: {
		addToCart: (state, action) => {
			const productToAdd = action.payload
			const existingItem = state.cartItems.find(
				item => item.title === productToAdd.title
			)
			if (existingItem) {
				existingItem.quantity += 1
			} else {
				state.cartItems.push({ ...productToAdd, quantity: 1 })
			}
		},
		incQuantity: (state, action) => {
			const index = action.payload
			state.cartItems[index].quantity += 1
		},
		decQuantity: (state, action) => {
			const index = action.payload
			if (state.cartItems[index].quantity === 1) {
				state.cartItems.splice(index, 1)
			} else {
				state.cartItems[index].quantity -= 1
			}
		},
		removeItem: (state, action) => {
			state.cartItems.splice(action.payload, 1)
		},
		toggleCart: (state, action) => {
			state.activeModal = action.payload
		}
	}
})
export default cartSlice.reducer
