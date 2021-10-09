import React from 'react'
import './App.css';
import carsBrands from "./data/car-brands";
import Landing from './components/Landing/Landing'

function App() {
  return (
    <Landing carsBrands={carsBrands}/>
  );
}

export default App;
