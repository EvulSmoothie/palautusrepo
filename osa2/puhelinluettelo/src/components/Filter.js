import React from 'react'
//Filter kentän renderöinti
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