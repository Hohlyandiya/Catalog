'use client';
import { Filter } from "@/src/components/ui/index"
import type { DetailsProduct } from '@/src/types/types.types'
import getCards from '@/src/features/getCards'
import { useGetProducts, useSetProductsStore } from '@/src/hooks';
import { Loading } from "@/src/assets/icons";
import { useEffect, useState } from "react";
import cn from "classnames";

export const CatalogProducts = ({products}: {products: DetailsProduct[]}) => {
  const [catalog, setCatalog] = useState([])
  const [isStock, setIsStock] = useState(false)
  const [category, setCategory] = useState(undefined)
  const [search, setSearch] = useState("")
  const setProductsInStore = useSetProductsStore()
  setProductsInStore(products)
  const productsSelector: DetailsProduct[] = useGetProducts()
  const maxPrice = Math.max(...productsSelector.map((product: DetailsProduct) => product.price))
  const [prices, setPrices] = useState({minPrice: 0, maxPrice})
  const cards = getCards(productsSelector, isStock, category, prices, search)
  const cardsStyle = cn("", {
          "h-full w-full p-8 flex flex-row flex-wrap gap-6 items-center": cards.length !== 0,
          "flex mx-auto items-center": cards.length === 0
        })
  /* useEffect(() => {
    setCatalog(cards)
  }, [cards]) */

  if (!Array.isArray(productsSelector) && productsSelector.length === 0) {
    return (
      <div className="flex h-full justify-center items-center bg-gray-100">
        <Loading/>
      </div>
    )
  }
  return (
    <div className="h-full flex justify-between">
      <div className="h-full bg-white border-r border-[#C4C4C4]">
        <Filter 
          prices={prices}
          setIsStock={setIsStock}
          isStock={isStock}
          setCategory={setCategory}
          setPrices={setPrices}
          setSearch={setSearch}
        />
      </div>
      <div className={cardsStyle}>
        {cards.length === 0 ? <div>Нет товаров под ваши запросы</div> : cards}
      </div>
    </div>
    
    )
}