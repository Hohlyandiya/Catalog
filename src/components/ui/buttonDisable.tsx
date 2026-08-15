export const ButtonDisable = ({onClick, className = "", children}: {onClick?: void, className?: string, children?: React.ReactNode}) => {
  const defaulStyle = "cursor-pointer rounded-xl bg-[#E4E4E4] text-[#868686] flex items-center justify-center p-2 mt-4"
  return (
    <button className={defaulStyle + className} onClick={onClick}>
      {children}
    </button>
  )
}