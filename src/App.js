import React from 'react';
import './App.css';
import VegetableContainerInput from "./containers/VegetablesContainer";

function App() {

    
  return (
    <div className="App">
      <header className="App-header">
          <div className="heading">Allotment Nutrition Planner</div>
        <VegetableContainerInput/>
      </header>
    </div>
  );
}

export default App;
