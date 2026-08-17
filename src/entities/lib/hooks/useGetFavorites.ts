import { useSelector } from "react-redux"
import { selectors } from "@/src/entities/favorites/model/favoritesSlice.slice"

export const useGetFavorites = () => {
  const favorites = useSelector(state => {
    const entities = selectors.selectEntities(state)
    return entities ? Object.values(entities) : []
  })
  return favorites
}