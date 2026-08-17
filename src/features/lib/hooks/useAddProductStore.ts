import { useDispatch } from "react-redux"
import { DetailsProduct } from "@/src/types/types.types"
import { addCart } from "@/src/entities/cart/model/cartSlice.slice"

export const useAddProductStore = () => {
  const dispatch = useDispatch()
  const addProductsToCart = (product: DetailsProduct) => {
    dispatch(addCart(product));
  };
  return addProductsToCart;
}