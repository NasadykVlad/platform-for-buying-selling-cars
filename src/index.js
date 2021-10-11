import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import carsBrands from "./data/car-brands";
import Landing from "./components/Landing/Landing";

ReactDOM.render(
  <React.StrictMode>
      {/*<Landing carsBrands={carsBrands}/>*/}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
