import { createContext, useState, useEffect } from "react";

export const Context = createContext();


export function contextProvider({children}) {

    useEffect(() => {
       {
         localStorage.getItem('mini-blog-access') === null
         ? localStorage.setItem('mini-blog-access')
         : setAccess(JSON.parse(localStorage.getItem('mini-blog-access')))
       }
    }, [])

    const [access, setAccess] = useState({
        token: '',
        isLoggedIn: false,
    });

    return (
        <Context.Provider>{children}</Context.Provider>
    )
}