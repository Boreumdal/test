import { createContext, useContext, useEffect, useState } from "react";

const SystemContext = createContext(null)

export const SysContext = ({ children }) => {
    const [token, setToken] = useState('')
    const [data, setData] = useState({})
    const [notif, setNotif] = useState({})
    const [students, setStudents] = useState([])
    const [events, setEvents] = useState([])
    const [requests, setRequests] = useState([])
    const [schedules, setSchedules] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            setNotif({})
        }, 2700)
        return () => clearInterval(interval)
    }, [])
    
    return (
        <SystemContext.Provider value={{token, setToken, data, setData, notif, setNotif, students, setStudents, events, setEvents, requests, setRequests, schedules, setSchedules}}>
            { children }
        </SystemContext.Provider>
    )
}

export const useSystem = () => {
    return useContext(SystemContext)
}