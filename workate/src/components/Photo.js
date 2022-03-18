import React from 'react'

function Photo(props) {
  return (
    <>
        <img className='photo' src={props.src} alt={props.author} />
    </>
  )
}

export default Photo