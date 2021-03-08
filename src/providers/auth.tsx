import React, { useState } from 'react'

interface FormContextData {
  loading: boolean,
  handleLoading: (value: boolean) => void,
}


export const AuthContext= React.createContext({} as FormContextData);

export const AuthProvider = (props) => {

  const [ loading, setLoading ] = useState(false)


  function handleLoading (value: boolean) {
    setLoading(value)
  }

  return (
    <AuthContext.Provider 
      value={{
        loading, 
        handleLoading
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}