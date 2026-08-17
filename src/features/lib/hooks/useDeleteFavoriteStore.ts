import { useDispatch } from "react-redux"
import { DetailsProduct } from "@/src/types/types.types"
import { deleteFavorite } from "@/src/entities/favorites/model/favoritesSlice.slice"

export const useDeleteFavoriteStore = () => {
  const dispatch = useDispatch()
  const deleteFavoriteStore = (product: DetailsProduct) => {
    dispatch(deleteFavorite(product))
  }
  return deleteFavoriteStore
}
