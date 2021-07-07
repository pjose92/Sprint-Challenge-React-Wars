import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import TheCharactersCards from "./components/CharactersCards";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {
      console.log(res.data.results);
      setData(res.data.results);
    })
    .catch(error => {
      console.log(`There is an ${error}`);
    })
  }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="TheCard">
        {data.length ? data.map(item  => {
          console.log(item)
          return<TheCharactersCards name={item.name} birthDate={item.birth_year} gender={item.gender} height={item.height}/>
        }) : null}
      </div>
    </div>
  );
}

export default App;
