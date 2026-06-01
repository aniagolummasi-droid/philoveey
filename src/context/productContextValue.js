import { createContext } from 'react'
import { products } from '../utils/constants'

export const ProductContext = createContext({
  error: null,
  loading: false,
  products,
})
