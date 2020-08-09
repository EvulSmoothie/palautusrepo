import React from 'react'
//Varoitusviestin näyttö , jos viestiä ei ole niin ei näytetä mitään. Jos on viesti se näytetään.
const Alert = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="alert">
        {message}
      </div>
    )

  }
  export  default  Alert