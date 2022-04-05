import React, {useEffect, useState, useContext, createContext, createElement} from 'react';

const ProductsContext = createElement()

export const ProductsProvider = ({children}) => {
  return (
    <ProductsContext.Provider value='products context'>{children}</ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
