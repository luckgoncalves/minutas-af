import React, { useState } from 'react'



export const AuthContext= React.createContext();

export const AuthProvider = (props) => {

  const [ loading, setLoading ] = useState(false)


  return (
    <AuthContext.Provider value={{loading, setLoading}}>
      {props.children}
    </AuthContext.Provider>
  )
}