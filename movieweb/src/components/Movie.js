import React from 'react'

const movie = (props) => {
  return (
    <div className='movie'>
      <img src={props.img} alt="" />
      <p>{props.title}</p>
      <p>Year:{props.year}</p>
    </div>
  )
}

export default movie
