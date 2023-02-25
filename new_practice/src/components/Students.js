import React from 'react'
import Panndit from './Panndit'

const Students = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
  
<Panndit name={props.name} />
    </div>
  )
}

export default Students
