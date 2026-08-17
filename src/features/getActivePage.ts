import { usePathname } from "next/navigation"

export const getActivePage = () => {
  const activePage = usePathname()
  return activePage
}