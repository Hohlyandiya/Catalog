import { Card } from "../components/ui"
import { DetailsProduct } from "../types/types.types"
import { getFilteredList } from "./getFilteredList"

const getCards = (products: DetailsProduct[], isStock: boolean, category: string | undefined, prices, search: string) => {
  const filteredList = getFilteredList(products, isStock, category, prices, search)
  const cards = filteredList.map((product: DetailsProduct) => 
      {
        const { id } = product
        return (
          <div key={id}>
            <Card
              product={product}
            />
          </div>
        )
    })
  return cards
}

export default getCards