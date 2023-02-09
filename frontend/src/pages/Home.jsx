import React, { useEffect } from 'react'
import Hero from '../components/Home/Hero'
import Footer from '../components/Home/Footer'
import Events from '../components/Home/Events'
import { useSystem } from '../context/SystemContext'
import axios from 'axios'

const Home = () => {
  const { token, setData } = useSystem()

  useEffect(() => {
    if (token){
      axios.post('http://localhost:8000/', { token })
        .then(response => {
          setData({ ...response.data })
        })
    }
  })
  return (
    <div>
        <Hero />
        <Events />
        <Footer />
    </div>
  )
}

export default Home