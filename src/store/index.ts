import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice'
import favoritesSlice from './slices/favoritesSlice'
import cartSlice from './slices/cartSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoritesSlice,
    products: productsSlice,
  },
})

export default store