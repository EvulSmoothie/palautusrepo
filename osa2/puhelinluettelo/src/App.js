import React, { useState, useEffect } from 'react'
import Person from './components/Person.js'
import Personform from './components/Personform'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'
import Alert from './components/Alert'
import './index.css'



const App = () => {
  //Pohjustetaan useStatet käyttöä varten tyhjiksi
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [popMessage, setMessage] = useState(null)
  const [alertMessage, setAlertMessage] = useState(null)
  //Haetaan serveriltä olemassa oleva listaus
  useEffect(() => {
    personService
    .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  //Henkilön deletointi delete-napin toiminta, ensin deletoidaan ID:n perusteella ja sen jälkeen haetaan serveriltä lista ja päivitetään se näkyviin
  const deletePerson = (id, person) => {
    if(window.confirm(`Do you really wanna delete ${person.name}`)){
    personService
    .del(id)
    .then(response=> {
      personService
      .getAll()
        .then(response => {
          setPersons(response.data)
          setMessage(
            `Person '${person.name}' was removed from server`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    })
    .catch(error => {
      alert(
        `the person was already deleted from server`
      )
      setPersons(persons.filter(n => n.id !== id))
    })}
  }
  //Haetaan henkilö nimen perusteella
  const findPerson = (name) => {
    return(
      persons[persons.map((person)=> {return person.name}).indexOf(name)]
    )
}


  //Henkölin lisäys, add-napin toiminta
  const addPerson = (event) =>{
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    //Varmistetaan että samannimistä henkilöä ei ole jo valmiiks
    if(persons.map((person)=> {return person.name}).includes(newName)){
      //Jos on samanniminen kysytään halutaanko päivittää numero
      if (window.confirm(`${newName} is already added to phonebook, do you wanna replace his/her number?`)){
        personService.update(findPerson(newName).id, newPerson)
        .then(response => {
          setPersons(persons.map(person => person.id !== findPerson(newName).id ? person : response.data))
          setMessage(
            `Persons '${newPerson.name}' number was updated to server`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setAlertMessage(
            `information of ${newPerson.name} was already deleted from server`
          )
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000)
          setPersons(persons.filter(n => n.id !== findPerson(newName).id))
        })
        
      }
    }
    else{
      personService
      .create(newPerson)
      .then(response =>{
        setPersons(persons.concat(response.data))
        setMessage(
          `Person '${newPerson.name}' was added to server`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  
    
  }
}
//Handlerit tekstikenttien tekstiä varten, päivitetään relevantit hookit koko ajan kirjoituksen tapahtuessa
  const handleFilterInput = (event) =>{
    setFilter(event.target.value)
  }
  const handleNameInput = (event) =>{
    setNewName(event.target.value)
  }
  const handleNumberInput =  (event)=>{
    setNewNumber(event.target.value)
  }
  //Filteröidään näytettävien listä filter kentän sisällön perusteella
  const personsToShow =  persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))


  return (
    //Appin renderöinti, kutsutaan komponentteja
    <div>
      <h2>Phonebook</h2>
      <Notification message={popMessage} />
      <Alert message={alertMessage} />
      <Filter filter ={filter} handleFilterInput = {handleFilterInput}/>
      <Personform addPerson ={addPerson} newName={newName} handleNameInput={handleNameInput} newNumber={newNumber} handleNumberInput={handleNumberInput}/>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person, i)=>
        <Person key={i} person={person} deletePerson={() => deletePerson(person.id, person)}/>

        )}
      </ul>
    </div>
  )

}

export default App