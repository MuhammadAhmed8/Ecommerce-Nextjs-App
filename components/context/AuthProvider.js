import React, { useReducer, useContext, useEffect } from "react"

// create the context
export const AuthStateContext = React.createContext({})

// set up initial state which is used in the below `AuthProvider` function
const initialState = { user: null }

// set up the reducer - same as Redux, allows us to process more complex changes
// to the state within the context API
const reducer = (state, action) => {
  switch (action.type) {
    case "setAuthDetails":
      return {
        user: action.payload
      }
    case "removeAuthDetails":
      return {
        user: initialState.user
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// create and export the AuthProvider - this is imported to the _app.js file
// and wrapped around the whole app, providing context to the whole app, and
// is called each time this specific context is accessed (updated or retrieved)
export const AuthProvider = ({ children }) => {
  
  let localState = null
  if (typeof localStorage !== "undefined" && localStorage.getItem("user")) {
    localState = JSON.parse(localStorage.getItem("user") || "")
  }
  const [state, dispatch] = useReducer(reducer, localState || initialState)

   useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state))
   }, [state])
  

  return (
    <AuthStateContext.Provider value={[state, dispatch]}>
      {children}
    </AuthStateContext.Provider>
  )
}

// useContext hook - export here to keep code for global auth state
// together in this file, allowing user info to be accessed and updated
// in any functional component using the hook
export const useAuth = () => useContext(AuthStateContext)