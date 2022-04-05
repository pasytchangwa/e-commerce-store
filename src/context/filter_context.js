import React, {useState, useEffect, createContext, useContext} from 'react';

const FilterContext = createContext()

export const FilterProvider = ({children}) => {
  return (
    <FilterContext.Provider value='filter context'>{children}</FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
