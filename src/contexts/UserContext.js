import { createContext, useState } from "react";


export const UserContext = createContext({
  userId: '',
  authenticated: false,
});



export const UserProvider = ({children}) => {

  const [userId, setUserId] = useState({userId: '', authenticated: true});
  
  const login = (userId) => {
    setUserId( (userId) => ({
      userId: userId,
      authenticated: true,
    }))
  };

  const logout = () => {
    setUserId((userId) => ({
      userId: '',
      authenticated: false,
    }))
  }
console.log('USERCONTEXT USERID', userId)
  return (
    <UserContext.Provider value={{userId, login, logout }}>
      {children}
    </UserContext.Provider>
  )


}