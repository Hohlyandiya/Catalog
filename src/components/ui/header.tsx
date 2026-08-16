"use client"
import Link from "next/link"
import { CartIcon, FavoriteIcon } from "@/src/assets/icons/index"
//import { Search } from "./search"
import { usePathname } from "next/navigation"
import cn from "classnames"

export const Header = () => {
  const path = usePathname()
  const activePage = cn("", {
    "border-b": true
  })
  return (
    <header>
      <div className="w-full flex justify-between items-center p-5 border-b border-[#C4C4C4]">
        <Link href='/' className={`text-3xl ${path === '/' ? activePage : ""}`}>Catalog</Link>
        {/* {path === "/" ? <Search></Search> : <></>} */}
        <nav className="flex gap-4">
          <Link href='/cart' className={path === '/cart' ? activePage : ""}>
            <CartIcon/>
          </Link>
          <Link href='/favorites' className={path === '/favorites' ? activePage : ""} >
            <FavoriteIcon/>
          </Link>
        </nav>
      </div>
    </header>
  )
}