import { useSelector } from "react-redux"
import { selectors } from "../store/slices/favoritesSlice"

export const useGetFavorites = () => {
  const favorites = useSelector(state => {
    const entities = selectors.selectEntities(state)
    return entities ? Object.values(entities) : []
  })
  return favorites
}