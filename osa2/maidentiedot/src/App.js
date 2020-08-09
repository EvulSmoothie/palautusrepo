import React from 'react'
import { useState, useEffect } from 'react'
import dataService from './services/countries'
import Countries from './components/countries'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
//Alustetaan tietojenhaku palvelu
  useEffect(() =>{
    dataService
    .getAll()
    .then(response => {
      setCountries(response.data)
    })
  }, [])
  //Alustetaan filtterin toiminnankäsittelijä
  const handleFilterInput = (event) =>{
    setFilter(event.target.value)
  }
  //Yhden maan näyttäminen, toteutaan vain asettamalla filteri maan nimeksi
  const showCountry = (country) =>{
    setFilter(country.name)
  }
  //Tehdään listä näytettävistä maista filterin perusteella
  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
  //Rendröidään appiin filteri kenttä ja kutsutaan komponentteja renderöimään maa-lista/maan tiedot
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
