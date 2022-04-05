import React, {useContext, createContext, useState, useEffect} from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  return (
    <CartContext.Provider value='cart context'>{children}</CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
