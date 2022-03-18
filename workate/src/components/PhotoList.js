import React from 'react'
import Photo from './Photo'

function PhotoList({ photosToRender }) {
  return (
    <>
    { photosToRender.map(element => {
        return (<Photo key={element.id} src={element.download_url} alt={element.author}/>)
    })
    } 
    </>
  )
}

export default PhotoList