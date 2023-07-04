import { format } from 'date-fns'

export function dateFormater(data: Date | string) {
  const inputDate = new Date(data)
  const formattedDate = format(inputDate, 'dd/MM/yyyy')
  return formattedDate
}
