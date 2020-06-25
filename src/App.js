import React from 'react';
import './App.css';
import VegetableInput from "./components/Vegetables";

function App() {
    
    function getInfo() {
        console.log("ahhhh")
    }
    
  return (
    <div className="App">
      <header className="App-header">
          <div className="heading">Allotment Nutrition Planner</div>
        <VegetableInput onHarvest={getInfo}/>
      </header>
    </div>
  );
}

export default App;
