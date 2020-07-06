import React, { useState } from 'react'
import Person from './components/Person.js'
import Personform from './components/Personform'
import Filter from './components/Filter'



const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '355235'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const addPerson = (event) =>{
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if(persons.map((person)=> {return person.name}).includes(newName)){
      window.alert(`${newName} is already added to phonebook`)
    }
    else{

  
    setPersons(persons.concat(newPerson))
  }
}
  const handleFilterInput = (event) =>{
    setFilter(event.target.value)
    
  }

  const handleNameInput = (event) =>{
    setNewName(event.target.value)
  }
  const handleNumberInput =  (event)=>{
    setNewNumber(event.target.value)
  }

  const personsToShow =  persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter ={filter} handleFilterInput = {handleFilterInput}/>
      <Personform addPerson ={addPerson} newName={newName} handleNameInput={handleNameInput} newNumber={newNumber} handleNumberInput={handleNumberInput}/>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person, i)=>
        <Person key={i} person={person}/>
        )}
      </ul>
    </div>
  )

}

export default App