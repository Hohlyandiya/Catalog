export const getSelectCategory = (options, option, setCategory) => {
  setCategory(options.filter(elem => elem.value === option.target.value ? elem.label : '')[0]?.label.toLocaleLowerCase())
}