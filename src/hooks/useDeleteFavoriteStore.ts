import { useDispatch } from "react-redux"
import { DetailsProduct } from "../types/types.types"
import { deleteFavorite } from "../store/slices/favoritesSlice"

export const useDeleteFavoriteStore = () => {
  const dispatch = useDispatch()
  const deleteFavoriteStore = (product: DetailsProduct) => {
    dispatch(deleteFavorite(product))
  }
  return deleteFavoriteStore
}
