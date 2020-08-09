//Kurssin renderöivä komponentti
import React from 'react'
//Kurssin otsikon renderöinti (oletettavasti kurssin nimi)
const Header = (props) =>{
    return(
      <h1>{props.course}</h1>
    )
  }
  

  //Kurssin sisällön renderöinti
  const Content = (props) =>{
    return(
      <div>
        {props.list}
      </div>
    )
  }
  //Lasketaan ja renderöidään tehtävien kokonaismäärä kurssikohtaisesti
  const Total = (props) =>{
    const reducer = (accumulator, currentVal) => accumulator +currentVal
    const tulos = props.list.reduce(reducer)
    return(
      <p>
       <b> Number of exercises {tulos}</b>
      </p>
    )
  }

  const Course = (props) =>{
    //Otetaan kurssin sisältö ja tehtävämäärä valmiiksi muuttujiin
    const partsCont = props.course.parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p> )
    const total = props.course.parts.map(part => part.exercises)
  
    return( 
      //Kutsutaan eri komponentteja tarvittavilla tiedoilla
    <div>
      <Header course={props.course.name}/>
      <Content list = {partsCont}/>
      <Total list = {total}/>
    </div>
    )
  }

  export default Course