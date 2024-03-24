import { useContext } from 'react'
import { SaleContext } from '../Contexts/SaleProvider'

export function useCart() {
  return useContext(SaleContext)
}