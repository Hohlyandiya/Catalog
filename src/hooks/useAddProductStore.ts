import { useDispatch } from "react-redux"
import { DetailsProduct } from "../types/types.types"
import { addCart } from "../store/slices/cartSlice"

export const useAddProductStore = () => {
  const dispatch = useDispatch()
  const addProductsToCart = (product: DetailsProduct) => {
    dispatch(addCart(product));
  };
  return addProductsToCart;
}