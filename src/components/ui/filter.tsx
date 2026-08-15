import { Price } from "./price"
import { Selector } from "./selector"

interface Filter {
  maxPrice: number
  setIsStock: (e: boolean) => void
  isStock: boolean
  setCategory: (e: string) => void
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

export const Filter = ({maxPrice, setIsStock, isStock, setCategory}: Filter) => {
  return (
    <div className="h-full p-4 flex flex-col gap-10 w-65">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">Категория</h2>
        <Selector setCategory={setCategory} options={OPTIONS}/>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">Цена</h2>
        <Price maxPrice={maxPrice}/>
      </div>
      <div className="flex">
        <input type="checkbox" name="" id="" onClick={() => setIsStock(!isStock)}/>
        <span className="ml-2">В наличии</span>
      </div>
    </div>
  )
}