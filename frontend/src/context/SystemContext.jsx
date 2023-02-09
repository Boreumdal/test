import { createContext, useContext, useState } from "react";

const SystemContext = createContext(null)

export const SysContext = ({ children }) => {
    const [token, setToken] = useState('')
    const [data, setData] = useState({})
    
    return (
        <SystemContext.Provider value={{token, setToken, data, setData}}>
            { children }
        </SystemContext.Provider>
    )
}

export const useSystem = () => {
    return useContext(SystemContext)
}