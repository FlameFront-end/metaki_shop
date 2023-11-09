import { combineReducers, configureStore } from '@reduxjs/toolkit'

import alertReducer from './reducers/alertSlice'
import cartReducer from './reducers/cartSlice'

const rootReducer = combineReducers({
	cartReducer,
	alertReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}
