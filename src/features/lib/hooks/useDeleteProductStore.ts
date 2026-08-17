import { useDispatch } from "react-redux"
import { DetailsProduct } from "@/src/types/types.types"
import { deleteCart } from "@/src/entities/cart/model/cartSlice.slice"

export const useDeleteProductStore = () => {
  const dispatch = useDispatch()
  const deleteProductStore = (product: DetailsProduct) => {
    dispatch(deleteCart(product))
  }
  return deleteProductStore
}
