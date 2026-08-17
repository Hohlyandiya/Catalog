export const Price = ({prices, setPrices}) => {
  return (
    <div className="flex wrap">
      <input className="border rounded-2xl px-2 w-full" type="text" placeholder={prices.minPrice} onChange={(e)=>setPrices((state)=>({...state, minPrice: prices.minPrice = +e.target.value}))}/>
      <span className="mx-1">-</span>
      <input className="border rounded-2xl px-2 w-full" type="text" placeholder={prices.maxPrice} onChange={(e)=>setPrices((state)=>({...state, maxPrice: prices.maxPrice = +e.target.value}))}/>
    </div>
  )
}