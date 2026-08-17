import getProducts from "@/src/api/getProducts"
import { Header, CatalogProducts } from "@/src/widgets/ui/index"
import { loadProducts } from "@/src/features/loadProducts/loadProducts"
import { DetailsProduct } from "@/src/types/types.types"

export const CatalogPage = async () => {
  const response = await getProducts()
  const products: DetailsProduct[] = response.data.items
  return (
    <>
      <Header/>
      <div className="h-full w-full bg-gray-100 overflow-auto">
        <CatalogProducts products={products}/>
      </div>
    </>
  )
}