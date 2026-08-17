import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const cartAdapter = createEntityAdapter()

const initialState = cartAdapter.getInitialState()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, { payload }) {
      cartAdapter.addOne(state, payload)
    },
    deleteCart(state, { payload }) {
      const { id } = payload
      cartAdapter.removeOne(state, id)
    },
  },
})

export const selectors = cartAdapter.getSelectors(state => state.cart)
export const { addCart, deleteCart } = cartSlice.actions
export default cartSlice.reducer