import React from 'react'
import './App.css';
import Header from './Header/Header'
import Order from './Order/Order'
import PanelAdmin from './PanelAdmin/PanelAdmin'


function App() {
  return (
      <div className="App">
        <Header />
        <Order />
        <PanelAdmin />
      </div>
  );
}

export default App;
