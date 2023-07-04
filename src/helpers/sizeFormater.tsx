export function sizeFormater(number: number) {
  if (number < 1024) {
    return number + 'KB'
  } else {
    const numberMB = (number / 1024).toFixed(0)
    return numberMB.concat('MB')
  }
}
