import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './products/model/productsSlice.slice'
import favoritesSlice from './favorites/model/favoritesSlice.slice'
import cartSlice from './cart/model/cartSlice.slice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoritesSlice,
    products: productsSlice,
  },
})

export default store