import React, { useState } from 'react'
import ReactDOM from 'react-dom'
//Nappi komponentti, annetaan teksti sekä klikkaus toiminto ja generoidaan siitä nappi
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = (props) => {
  //Alustetaan use statet
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
//Randomisointi klikkaus, arvotaan numero ja asetetaan sen kohdan anekdootti näkyviin
  const hancleClick = () =>{
    setSelected(Math.floor(Math.random()*6))
  }
  //Äänestys klikkaus, liästään listaan kyseisen anekdootin kohdalle +1
  const handleVote = () => {
    const copy = points.splice(0)
    copy[selected] +=1
    setPoints(copy)


    
  }


//Renderöidään appi, näytetään yksi anekdootti, sen jälkeen napit, ja lopuksi eniten ääniä saanut anekdootti
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br></br>
      <Button onClick = {handleVote} text = 'vote'/>
      <Button onClick={hancleClick} text='next anecdote'/><br></br>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[points.indexOf(Math.max(...points))]}
      <p>has {Math.max(...points)} votes</p>
      
      



    </div>
  )
}
//kovakoodattu lista anekdooteista
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
