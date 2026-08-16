import { DetailsProduct } from "../types/types.types"
import { normalizeName } from "./normalizeName"

export const getFilteredList = (products: DetailsProduct[], isStock: boolean, category: string | undefined, prices, search: string) => {
  let newList = products
  const searchName = (list) => newList = list.filter(product => product.name.toLocaleLowerCase().includes(search))
  const stockFilter = (list) => newList = isStock ? list.filter(product => product.quantity > 0) : list
  const categoryFilter = (list) => newList = category !== undefined ? list.filter(product => normalizeName(product.name).split(" ")[0] === category) : list
  const priceFilter = (list) => newList = list.filter(product => product.price > prices.minPrice && product.price < prices.maxPrice)
  searchName(newList)
  stockFilter(newList)
  categoryFilter(newList)
  priceFilter(newList)
  return newList
}