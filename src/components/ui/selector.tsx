import { getSelectCategory } from "@/src/features/getSelectCategory"

export const Selector = ({options, setCategory}) => {
  return (
    <select className="w-full border border-[#C4C4C4] rounded-xl p-1" name="select" onChange={(option) => getSelectCategory(options, option, setCategory)}>
      {options.map(elem => <option onSelect={() => alert("option")/* setCategory(elem.label) */} key={elem.label} value={elem.value} label={elem.label}/>)}
    </select>
  )
}