import { TCurrencyFormat } from '../types/TCurrency'

export const currencyFormat = (props: TCurrencyFormat) => {
  const { amount, currency } = props
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return formatter.format(amount)
}
