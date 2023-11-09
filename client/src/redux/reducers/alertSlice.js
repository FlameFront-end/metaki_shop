import { createSlice } from '@reduxjs/toolkit'

export const alertSlice = createSlice({
	name: 'alert',
	initialState: {
		activeAlertSuccess: false,
		activeAlertRejected: false
	},
	reducers: {
		toggleAlertSuccess: (state, action) => {
			state.activeAlertSuccess = action.payload
		},
		toggleAlertRejected: (state, action) => {
			state.activeAlertRejected = action.payload
		}
	}
})
export default alertSlice.reducer
