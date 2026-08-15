'use client';
import { Filter } from "@/src/components/ui/index"
import type { DetailsProduct } from '@/src/types/types.types'
import getCards from '@/src/features/getCards'
import { useGetProducts, useSetProductsStore } from '@/src/hooks';
import { Loading } from "@/src/assets/icons";
import { useState } from "react";

export const CatalogProducts = ({products}: {products: DetailsProduct[]}) => {
  const [isStock, setIsStock] = useState(false)
  const [category, setCategory] = useState(undefined)
  const setProductsInStore = useSetProductsStore()
  setProductsInStore(products)
  const productsSelector: DetailsProduct[] = useGetProducts()
  const maxPrice = Math.max(...productsSelector.map((product: DetailsProduct) => product.price));
  const cards = getCards(productsSelector, isStock, category)
  if (!Array.isArray(productsSelector) && productsSelector.length === 0) {
    return (
      <div className="flex h-full justify-center items-center bg-gray-100">
        <Loading/>
      </div>
    )
  }
  return (
    <div className="flex justify-between">
      <div className="bg-white border-r border-[#C4C4C4]">
        <Filter 
          maxPrice={maxPrice}
          setIsStock={setIsStock}
          isStock={isStock}
          setCategory={setCategory}
        />
      </div>
      <div className="p-8 flex flex-row flex-wrap justify-between items-center">
        {cards}
      </div>
    </div>
    
    )
}