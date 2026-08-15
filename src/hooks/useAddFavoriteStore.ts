import { useDispatch } from "react-redux"
import { DetailsProduct } from "../types/types.types"
import { addFavorite } from "../store/slices/favoritesSlice"

export const useAddFavoriteStore = () => {
  const dispatch = useDispatch()
  const addProductToFavorites = (data: DetailsProduct) => {
    dispatch(addFavorite(data))
  }
  return addProductToFavorites
}
