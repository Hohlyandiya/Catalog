export const Button = ({onClick, className = "", children}) => {
  const defaulStyle = "cursor-pointer border rounded-xl flex items-center justify-center p-2 mt-4"
  return (
    <button className={defaulStyle + className} onClick={onClick}>
      {children}
    </button>
  )
}