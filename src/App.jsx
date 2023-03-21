import { useState, useEffect } from 'react'
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
      {
        countries.map(country =><Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h1>Name: {props.name}</h1>
      <h3>Population : {props.population}</h3>
    </div>
  )
}

export default App
