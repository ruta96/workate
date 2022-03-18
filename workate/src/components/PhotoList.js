import React from 'react'
import Photo from './Photo'

function PhotoList({ photosToRender }) {
  return (
    <>
    { photosToRender.map(element => {
      let slug = "";
        if (element.url.slice(0,28) == "https://unsplash.com/photos/")
          slug = element.url.slice(28);
        else
          slug = "source-404"
        return (<Photo key={element.id} src={"https://source.unsplash.com/" + slug} alt={element.author}/>)
    })
    } 
    </>
  )
}

export default PhotoList