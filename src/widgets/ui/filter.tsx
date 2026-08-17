import { Price } from "./price"
import { Search } from "./search"
import { Selector } from "./selector"

type Prices = {
  minPrice: number,
  maxPrice: number
}
interface Filter {
  prices: Prices
  setIsStock: (e: boolean) => void
  isStock: boolean
  setCategory: (e: string) => void
  setPrices: (e: Prices) => void
  setSearch: (e: string) => void
}

const OPTIONS = [
    {
    value: '',
    label: ''
  },
  {
    value: 'carbine',
    label: 'Карабин'
  },
  {
    value: 'gun',
    label: 'Ружье'
  }
]

export const Filter = ({prices, setIsStock, isStock, setCategory, setPrices, setSearch}: Filter) => {
  return (
    <div className="h-full p-4 flex flex-col gap-10 w-65">
      <div className="w-full">
        <Search setSearch={setSearch}></Search>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">Категория</h2>
        <Selector setCategory={setCategory} options={OPTIONS}/>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">Цена</h2>
        <Price prices={prices} setPrices={setPrices}/>
      </div>
      <div className="flex">
        <input type="checkbox" name="" id="" onClick={() => setIsStock(!isStock)}/>
        <span className="ml-2">В наличии</span>
      </div>
    </div>
  )
}