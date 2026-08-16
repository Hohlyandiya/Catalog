import { useGetCart, useGetFavorites } from "@/src/hooks"

export const BadgeIcon = ({variant}: {variant: string}) => {
  switch (variant) {
    case ('favorites'): {
      const countProduct = useGetFavorites().length
      return countProduct 
      ? 
      (<span className="absolute -top-0 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">{countProduct}</span>)
      :
      <></>
    }
    case ('cart'): {
      const countProduct = useGetCart().length
      return countProduct 
      ? 
      (<span className="absolute -top-0 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">{countProduct}</span>)
      :
      <></>
    }
  }
/*   const countProduct = useGetFavorites()
  return (
    <span className="absolute -top-0 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">3</span>
  ) */
}