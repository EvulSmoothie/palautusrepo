import React from 'react'

const Filter = (props) => {
    return(
      <div>filter: <input
      value = {props.filter}
      onChange={props.handleFilterInput}
      />
     </div>
    )
  }

  export default Filter