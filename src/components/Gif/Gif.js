//install axios -->  npm i axios
//install router --> npm i react-router-dom@6


import axios from 'axios';
import {useState} from 'react';
//acts as the entry way, you open the gate here and then there's dif paths you can take

function Gif() {

  //useState is a React Hook 
  //array destructuring 1st=> state.variable bame; 2nd => setter method for this specific state
  //useState(defaultValue)
  const [gif,setGif]=useState('')

  //create a func that  grabs a random Gif from Giphy API
  //async await => newer syntax of thennables
  //https://javascript.info/asunc-await
  const getGif = async() =>{
    try{

      // ****CHANGE LINK ****** use YOUR API KEY PLEASE
      const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=Yo0lVgA6wz8fIuOK3iInOdUCcTTXvOsW&tag=&rating=g'); 
      setGif(response.data.data.images.original.url);
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      
        <h1>Giphy!</h1>

        <img src={gif} alt=''></img>
        <button onClick={getGif}>Click Me</button>

    </div>
  );
}

export default Gif;
