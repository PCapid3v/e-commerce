import { createContext, useState } from 'react'
import PRODUCTS from '../shop-data'

export const ProductContext = createContext({
    products: PRODUCTS
})

export const ProductProvider = ({ children }) => {
    const [products ] = useState(PRODUCTS)
    const  value = { products } 

    return (
        <ProductContext.Provider value={ value }>
            {children}
        </ProductContext.Provider>
    )
    }