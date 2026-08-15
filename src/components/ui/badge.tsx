import { ReactElement } from "react"
import cn from "classnames"

export const Badge = ({ hidden = false, children }: {hidden: boolean, children: React.ReactNode}): ReactElement => {
  const badgeClass = cn("flex justify-center items-center py-1 px-2 rounded-lg bg-[#63D478] text-xs", {
    'hidden': hidden
  })
  return (
    <div className={badgeClass}>
      {children}
    </div>
  )
}