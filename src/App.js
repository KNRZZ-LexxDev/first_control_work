
import { useState, useEffect } from 'react';
import { getRoutes } from './navigation/routes';
import { RouterProvider } from 'react-router-dom';
import { createContext } from 'react';
import { getAuth } from './requests/request';


export const AuthContext = createContext(null);

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // getAuth().then(() => {
    //   setIsAuth(true);
    //   console.log(isAuth)
    // })
  }, [isAuth])

  const routes = getRoutes(isAuth);


  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <RouterProvider router={routes} />
    </AuthContext.Provider>
  );
};
