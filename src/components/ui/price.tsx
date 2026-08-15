export const Price = ({maxPrice}) => {
  return (
    <div className="flex wrap">
      <input className="border rounded-2xl px-2 w-full" type="text" placeholder="0"/>
      <span className="mx-1">-</span>
      <input className="border rounded-2xl px-2 w-full" type="text" placeholder={maxPrice}/>
    </div>
  )
}