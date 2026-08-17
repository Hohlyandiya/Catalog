import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const productsAdapter = createEntityAdapter()

const initialState = productsAdapter.getInitialState()

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      productsAdapter.setMany(state, payload)
    },
  },
})

export const selectors = productsAdapter.getSelectors(state => state.products)
export const { setProducts } = productsSlice.actions
export default productsSlice.reducer