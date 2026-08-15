import getProducts from "@/src/api/getProducts"
import { Header, CatalogProducts } from "@/src/components/ui/index"
import { DetailsProduct } from "@/src/types/types.types"

const Catalog = async () => {
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

export default Catalog