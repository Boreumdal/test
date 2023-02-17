import React, { useEffect } from 'react'
import Hero from '../components/Home/Hero'
import Footer from '../components/Home/Footer'
import Events from '../components/Home/Events'
import { useSystem } from '../context/SystemContext'
import axios from 'axios'

const Home = () => {
  const { token, data, setData, setRequests, setStudents, setEvents, setSchedules } = useSystem()

  useEffect(() => {
    axios.get(import.meta.env.VITE_SERVER_URL + '/dashboard/all')
      .then(response => {
        setEvents(response.data.events.map(a => a).sort((a, b) => Date.parse(a.when) - Date.parse(b.when)))
      })
  }, [])

  useEffect(() => {
    if (token){
      if(!data.role){
        axios.post(import.meta.env.VITE_SERVER_URL + '/', { token })
          .then(response => {
            setData({ ...response.data })
          })
      }
    }
  }, [token])

  useEffect(() => {
    if (data.role === '5deba6ae484c2fa98f58e4b0df0dd7fecfd9f7dd9a4a9f9b4739d8e1389915bd826442a81312ac3228ecc83120'){
      axios.get(import.meta.env.VITE_SERVER_URL + '/dashboard/all')
        .then(response => {
          setStudents(response.data.students.reverse())
          setEvents(response.data.events.map(a => a).sort((a, b) => Date.parse(a.when) - Date.parse(b.when)))
          setRequests(response.data.requests.map(a => a).sort((a, b) => a.created_at - b.created_at))
          setSchedules(response.data.schedules.map(a => a).sort((a, b) => Date.parse(a.appointed_date) - Date.parse(b.appointed_date)))
        })
    }
    if (data.role === '49afe28d956804de0fde8f7bcabd749f495193c53fc5d802355c96ad6f3f46c37e72d18b9830d61de80c7b01f9'){
      axios.get(import.meta.env.VITE_SERVER_URL + `/dashboard/student/${data._id}`)
        .then(response => {
          setRequests(response.data.requests.map(a => a).sort((a, b) => a.created_at - b.created_at))
          setSchedules(response.data.schedules.map(a => a).sort((a, b) => Date.parse(a.appointed_date) - Date.parse(b.appointed_date)))
        })
    }
  }, [data])

  return (
    <div>
        <Hero />
        <Events />
        <Footer />
    </div>
  )
}

export default Home