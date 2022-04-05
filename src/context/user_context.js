import React, {useEffect, useState, useContext, createContext} from 'react';


const UserContext= createContext()

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value='user context'>{children}</UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}