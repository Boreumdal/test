import { createContext, useContext, useEffect, useState } from "react";

const SystemContext = createContext(null)

export const SysContext = ({ children }) => {
    const [token, setToken] = useState('')
    const [data, setData] = useState({})
    const [notif, setNotif] = useState({})

    useEffect(() => {
        const interval = setInterval(() => {
            setNotif({})
        }, 2400)
        return () => clearInterval(interval)
    }, [])
    
    return (
        <SystemContext.Provider value={{token, setToken, data, setData, notif, setNotif}}>
            { children }
        </SystemContext.Provider>
    )
}

export const useSystem = () => {
    return useContext(SystemContext)
}