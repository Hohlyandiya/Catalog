import { useDispatch } from "react-redux"
import { setProducts } from "../store/slices/productsSlice"
import { DetailsProduct } from "../types/types.types"

export const useSetProductsStore = () => {
  const dispatch = useDispatch()
  const setProductsInStore = (product: DetailsProduct[]) => {
      dispatch(setProducts(product))
    }
    return setProductsInStore
}
