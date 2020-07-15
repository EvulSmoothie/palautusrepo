import React from 'react'
import { useState, useEffect } from 'react'
import dataService from './services/countries'
import Countries from './components/countries'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() =>{
    dataService
    .getAll()
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleFilterInput = (event) =>{
    setFilter(event.target.value)
  }

  const showCountry = (country) =>{
    setFilter(country.name)
  }

  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div>
      find countries <input value ={filter} onChange = {handleFilterInput}/>
      <ul>
        <Countries countriesToShow = {countriesToShow} showCountry = {showCountry} />
      </ul>
    </div>
  );
}

export default App;
