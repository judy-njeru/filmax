import React, {useState, useEffect}from 'react';
import './App.css';

import axios from "axios";

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  const [genresState, setGenres] = useState({
    genres: null
  })

  const [moviesState, setMovies] = useState({
    movies: null
  })

  

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=6c6774fdc0da477c7a3f3f7c03048117&language=en-US';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);


  return (
    <div className="App">
      <p>App</p>
    </div>
  );
}

export default App;
