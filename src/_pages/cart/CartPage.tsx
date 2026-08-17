"use client"
import { Header } from "@/src/widgets/ui"
import getCards from "@/src/features/getCards"
import { useGetCart } from "@/src/hooks"

export const CartPage = () => {
  const cart = useGetCart()
  const emptyCart = <div className="text-2xl flex items-center mx-auto">Корзина пуста</div>
  const cards = getCards(cart)
  const renderCards = cards.length === 0 ? emptyCart : cards
  return (
    <>
      <Header/>
      <div className="flex flex-row flex-wrap h-full bg-gray-100 overflow-auto gap-7 p-10">
        {renderCards}
      </div>
    </>
  )
}