import React, { useState, useEffect }from 'react';
import { connect } from "react-redux";
import { getDiscoveredMovies, getConfig, getGenres } from "../redux/actions";
import './App.css';


const mapDispatchToProps = (dispatch) => {
  return {
    getDiscoveredMovies: () => dispatch(getDiscoveredMovies()),
    getConfig: () => dispatch(getConfig()),
    getGenres: () => dispatch(getGenres()),
  };
};

function App(props) {

  useEffect(() => {
    props.getDiscoveredMovies();
    props.getConfig();
    props.getGenres();
  })


  return (
    <div className="App">
      <p>App</p>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(App);

