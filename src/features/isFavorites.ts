import { DetailsProduct } from "../types/types.types"

export const isFavorite = (favorites: DetailsProduct[], id: number) => {
  return favorites.some(elem => elem.id === id)
}