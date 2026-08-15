import { useSelector } from "react-redux"
import { selectors } from "../store/slices/productsSlice"

export const useGetProducts = () => {
  const products = useSelector(state => {
    const entities = selectors.selectEntities(state)
    return entities ? Object.values(entities) : []
  })
  return products
}