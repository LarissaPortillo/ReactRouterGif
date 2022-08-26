
import './App.css';
import axios from 'axios';
import {useState} from 'react';
//acts as the entry way, you open the gate here and then there's dif paths you can take

function App() {

  //useState is a React Hook 
  //array destructuring 1st=> state.variable bame; 2nd => setter method for this specific state
  //useState(defaultValue)
  const [gif,setGif]=useState('')

  //create a func that  grabs a random Gif from Giphy API
  //async await => newer syntax of thennables
  //https://javascript.info/asunc-await
  const getGif = async() =>{
    try{
      const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=Yo0lVgA6wz8fIuOK3iInOdUCcTTXvOsW&tag=&rating=g'); 
      setGif(response.data.data.images.original.url);
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className="App">
        <h1>Giphy!</h1>
        <img src={gif} alt=''></img>
        <button onClick={getGif}>Click Me</button>
    </div>
  );
}

export default App;
