export const normalizeName = (str: string): string => {
  return str.toLocaleLowerCase().replace(/[ё]/g, 'е');
}