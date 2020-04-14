import React , { useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [flights, setFlights] = useState('Hello')
  useEffect(() => {
    getFlights()
  }, [])
  function getFlights () {
    // axios.get('/')
    axios.get('http://localhost:4000/')
    .then(res => {
      console.log('Res => ', res.data)
      setFlights(JSON.stringify(res.data))
      
    })
  
  }
  return (
    <div className="App">
      <header >
    
          Flight Tracker
       
      </header>
      <div>
        { flights }
      </div>
    </div>
  )
}

export default App
