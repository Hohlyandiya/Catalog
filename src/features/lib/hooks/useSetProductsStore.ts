import { useDispatch } from "react-redux"
import { setProducts } from "@/src/entities/products/model/productsSlice.slice"
import { DetailsProduct } from "@/src/types/types.types"

export const useSetProductsStore = () => {
  const dispatch = useDispatch()
  const setProductsInStore = (product: DetailsProduct[]) => {
      dispatch(setProducts(product))
    }
    return setProductsInStore
}
