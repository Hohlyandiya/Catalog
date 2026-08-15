import { Card } from "../components/ui"
import { DetailsProduct } from "../types/types.types"
import { normalizeName } from "./normalizeName"

const getCards = (products: DetailsProduct[], isStock: boolean, category: string) => {
  const stockFilter = (isStock ? products.filter(product => product.quantity > 0 ? product : "") : products)
  const categoryFilter = (category !== undefined ? products.filter(product => normalizeName(product.name).split(" ")[0] === category ? product : "") : products)
  console.log(categoryFilter)
  const cards = categoryFilter.map((product: DetailsProduct) => {
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