import { useSelector } from "react-redux"
import { selectors } from "../store/slices/productsSlice"

export const useGetProduct = (id: number) => {
  const products = useSelector(state => {
    const entities = selectors.selectEntities(state)
    return entities ? entities[id] : []
  })
  return products
}