import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatLine = (props) => {
  return(
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )
  
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
      <StatLine text='good' value={props.hyva}/>
      <StatLine text='neutral' value={props.neutraali}/>
      <StatLine text='bad' value={props.huono}/>
      <StatLine text='total' value={props.total}/>
      <StatLine text='average' value={(props.hyva-props.huono)/props.total}/>
      <StatLine text='positive' value={(props.hyva/props.total*100)+' %'}/>
      </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setTotal(total+1)
    setGood(good+1)

  }
  const handleNeutral = () => {
    setTotal(total+1)
    setNeutral(neutral+1)

  }
  const handleBad = () => {
    setTotal(total+1)
    setBad(bad+1)

  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics hyva={good} neutraali={neutral} huono={bad} total={total}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
