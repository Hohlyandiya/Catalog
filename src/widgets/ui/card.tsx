"use client"
import Image from "next/image"
import { BadgeProduct, Button } from "./index"
import type { DetailCard, DetailsProduct } from "@/src/types/types.types"
import { FavoriteProductIcon, FavoriteDefaultProductIcon } from "@/src/assets/icons"
import { handlerName } from "@/src/features/handlerName"
import Link from "next/link"
import { useAddFavoriteStore, useDeleteFavoriteStore, useAddProductStore } from "@/src/features/lib/hooks"
import { isFavorite } from "@/src/features/isFavorites"
import { useGetFavorites } from "@/src/entities/lib/hooks"
import { ButtonDisable } from "./buttonDisable"
import { useGetCart } from "@/src/hooks/useGetCart"
import { isInCart } from "@/src/features/isInCart"



export const Card = ({product}: {product: DetailsProduct}) => {
  const addProductToCart = useAddProductStore()
  const addProductToFavorites = useAddFavoriteStore()
  const deleteFavoriteStore = useDeleteFavoriteStore()
  const { id, name, preview_picture, labels, price, price_discount, quantity, reviews, available }: DetailCard = product
  const favorites = useGetFavorites()
  const productsInCart = useGetCart()
  const favorite = favorites.some(elem => elem.id === id)

  return (
    <div className="min-h-110 w-70 mb-4 p-4 flex flex-col justify-between items-center border border-[#C4C4C4] rounded-xl shadow-xl bg-white">
      <div className="w-full flex justify-between">
        <div className="w-full flex justify-start gap-2 items-center">
          <BadgeProduct hidden={labels?.new ? false : true}>{labels.new}</BadgeProduct>
          <BadgeProduct hidden={labels?.discount ? false : true}>{labels.discount}</BadgeProduct>
        </div>
          <span onClick={() => isFavorite(favorites, id) ? deleteFavoriteStore(product) : addProductToFavorites(product)} className="flex justify-between items-center cursor-pointer">
            { favorite ? <FavoriteProductIcon/> : <FavoriteDefaultProductIcon/> }
          </span>
      </div>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center items-center h-50 w-50">
          <Image src={preview_picture} height={200} width={200} alt='Изображение товара'/>
        </div>
      </Link>
      <div className="flex flex-col gap-1 px-4 border-b">
        <div className="text-sm">{price_discount 
          ? <>
              <span className="text-gray-500 line-through text-xl">{price} ₽</span>
              <span className="text-xl">{" "}{price_discount} ₽</span> 
            </>
          : <span className="text-xl">{price} ₽</span>
        }</div>
        <span className="text-lg">{quantity}шт осталось</span>
        <span className="text-sm">{handlerName(name)}</span>
        <span className="text-sm">{reviews} отзывов</span>
      </div>
      <div>
        {isInCart(productsInCart, id) ? <ButtonDisable>В корзину</ButtonDisable> : <Button onClick={() => addProductToCart(product)}>В корзину</Button>}
      </div>
    </div>
  )
}