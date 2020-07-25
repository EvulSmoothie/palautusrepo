import React from 'react'
import ReactDOM from 'react-dom'
//Komponentti otsikolle, saa tekstin ja muodostaa siitä otsikon (header1)
const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}
//Komponentti yksittäiselle osiolle, saa osan nimen ja harjoitusten määrän ja muodostaa niistä yhden paragraafin
const Part = (props) =>{
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}
//komponentti kurssin sisällölle, saa erineiset osat ja niiden harjoitus määrän ja kutsuu niillä yksittäisen osion komponenttia
const Content = (props) =>{
  return(
    <div>
    <Part part={props.part} exercises={props.exercises}/>
    <Part part={props.part2} exercises={props.exercises2}/>
    <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}
//Komponentti harjoitusten laskemiselle, laskee yhteen saadut harjoitus määrät ja esittää sen
const Total = (props) =>{
  return(
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

const App = () => {
  //Kovakoodataan meille kurssin tiedot
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    //Appin renderöinti, kutsutaan eri komponentteja kovakoodatuilla tiedoilla
    <div>
      <Header course={course.name} />
      <Content part={course.parts[0].name} exercises={course.parts[0].exercises} part2={course.parts[1].name} exercises2={course.parts[1].exercises} part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))