import logo from './logo.svg';
import './App.css';
import Movies from './Movies/MovieList';
import { useState } from 'react';

function App() {

    const [moviesList,setMoviesList] = useState([]);
 
const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=the';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b29bec9b8cmshe15a2bb5e2a40bap1118b8jsnc7930a2c9ffd',
		'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
	}
};


  async  function fetchMoviesHandler() {
    const response = await fetch(url,options);
    const result = await response.json();

    setMoviesList(result.data);
    console.log(result);
  }


  return (
    <div className="">


        <div>
          <button onClick={fetchMoviesHandler}> Fetch movies</button>
        </div>
        <Movies moviesList={moviesList}></Movies>
    </div>
  );
}

export default App;
