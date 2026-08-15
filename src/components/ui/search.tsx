import { SearchIcon } from "@/src/assets/icons"

export const Search = ({children}: {children: React.ReactNode}) => {
  return (
    <div className=" w-100 flex flex-row items-center border rounded-xl p-1">
      <div className="cursor-pointer mx-1"><SearchIcon/></div>
      <input type="text" className="focus:outline-none" placeholder="Найти">{children}</input>
    </div>
  )
}