import { createContext, useState } from 'react'

export const AppContext = createContext()

export function AppProvider({ children }) {
    const [userUID, setUserUID] = useState("");
    const [userInfo, setUserInfo] = useState({});
    const [preloader, setPreloader] = useState(false);


    return (
        <AppContext.Provider
            value={{
                userUID, setUserUID,
                userInfo, setUserInfo,
                preloader, setPreloader,

            }}
        >
            {children}
        </AppContext.Provider>
    )
}