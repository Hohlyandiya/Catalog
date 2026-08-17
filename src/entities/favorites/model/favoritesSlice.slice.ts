import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const favoritesAdapter = createEntityAdapter()

const initialState = favoritesAdapter.getInitialState()

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      favoritesAdapter.addOne(state, payload)
    },
    deleteFavorite(state, { payload }) {
      const { id } = payload
      favoritesAdapter.removeOne(state, id)
    },
  },
})

export const selectors = favoritesAdapter.getSelectors((state) => state.favorites)
export const { addFavorite,deleteFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer