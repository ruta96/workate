import './components/Photo';
import PhotoList from './components/PhotoList';
import './app.css';
import {useState, useEffect} from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(3); 
  
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  let photoToShow = data.slice(0,counter);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return ( 
    <>
    <div className='container'>
      <div className='gallery'>
        <PhotoList photosToRender={photoToShow}/>
        </div>
      <div className='button' id="more-button" onClick={() => {
        if (counter < data.length)
        setCounter(counter + 3)
        else
        document.getElementById("more-button").style.display = "none";
        }}>MORE</div> 
    </div>
    </> 
  ); 
}
}

export default App;
