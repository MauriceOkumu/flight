import React , { useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [flights, setFlights] = useState('Hello')
  useEffect(() => {
    getFlights()
  }, [])

  function getFlights () {
    axios.get('/api')
    .then((res ) => {
      console.log('port => ', process.env.PORT)
      setFlights(JSON.stringify(res.data))
      
    }).catch(err => {
      console.log(err)
    })
   
  }
  return (
    <div className="App">
      <header >
    
          Flight Tracker Liitedrr
       
      </header>
      <div>
        <p>All The flights</p>
        { flights }
      </div>
    </div>
  )
}

export default App
