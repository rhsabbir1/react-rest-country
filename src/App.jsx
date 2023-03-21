import { useState , useEffect } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <LoadCountry></LoadCountry>
    </div>
  )
}


function LoadCountry() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])


  return (
    <div className='load-country-section'>
      <h1>Visiting Every Countey of the world!!</h1>
      <h3>Total Country : {countries.length}</h3>
    </div>
  )
}

export default App
