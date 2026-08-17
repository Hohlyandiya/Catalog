"use client"
import { Header } from "@/src/widgets/ui"
import getCards from "@/src/features/getCards"
import { useGetFavorites } from "@/src/entities/lib/hooks"

export const FavoritesPage = () => {
  const favorites = useGetFavorites()
  const emptyFavorites = <div className="text-2xl flex items-center mx-auto">Нет избранных товаров</div>
  const cards = getCards(favorites)
  const renderCards = cards.length === 0 ? emptyFavorites : cards
  return (
    <>
      <Header/>
      <div className="h-full flex flex-row gap-7 flex-wrap bg-gray-100 overflow-auto p-10">
        {renderCards}
      </div>
    </>
  )
}