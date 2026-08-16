import { SearchIcon } from "@/src/assets/icons"

export const Search = ({children, setSearch}: {children: React.ReactNode, setSearch: (e: string) => void}) => {
  return (
    <div className=" w-full flex flex-row items-center border rounded-xl p-1">
      <div className="cursor-pointer mx-1"><SearchIcon/></div>
      <input type="text" className="focus:outline-none" placeholder="Найти" onChange={(e) => {setSearch(e.target.value.toLocaleLowerCase().trim())}}>{children}</input>
    </div>
  )
}