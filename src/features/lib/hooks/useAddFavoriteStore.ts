import { useDispatch } from "react-redux"
import { DetailsProduct } from "@/src/types/types.types"
import { addFavorite } from "@/src/entities/favorites/model/favoritesSlice.slice"

export const useAddFavoriteStore = () => {
  const dispatch = useDispatch()
  const addProductToFavorites = (data: DetailsProduct) => {
    dispatch(addFavorite(data))
  }
  return addProductToFavorites
}
