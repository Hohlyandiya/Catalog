import { DetailsProduct } from "../types/types.types"

export const isInCart = (favorites: DetailsProduct[], id: number) => {
  return favorites.some(elem => elem.id === id)
}