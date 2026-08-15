import { useDispatch } from "react-redux"
import { DetailsProduct } from "../types/types.types"
import { deleteCart } from "../store/slices/cartSlice"

export const useDeleteProductStore = () => {
  const dispatch = useDispatch()
  const deleteProductStore = (product: DetailsProduct) => {
    dispatch(deleteCart(product))
  }
  return deleteProductStore
}
