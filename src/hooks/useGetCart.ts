import { useSelector } from "react-redux"
import { selectors } from "../store/slices/cartSlice"

export const useGetCart = () => {
  const cart = useSelector(state => {
    const entities = selectors.selectEntities(state)
    return entities ? Object.values(entities) : []
  })
  return cart
}