import React from 'react'

const Header = (props) =>{
    return(
      <h1>{props.course}</h1>
    )
  }
  

  
  const Content = (props) =>{
    return(
      <div>
        {props.list}
      </div>
    )
  }
  
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
    
    const partsCont = props.course.parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p> )
    const total = props.course.parts.map(part => part.exercises)
  
    return( 
    <div>
      <Header course={props.course.name}/>
      <Content list = {partsCont}/>
      <Total list = {total}/>
    </div>
    )
  }

  export default Course