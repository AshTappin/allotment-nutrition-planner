import React, {useState} from 'react';

const VegetableInput = (props) => {

    const [plants, setPlants] = useState([]);
    
    return (<div className="input-container">
        <textarea className="plants" rows="10" cols="50"
                  placeholder="What are you growing?"
                  value={plants.join("\n")}
                  onChange={(evt) => {
                      setPlants(evt.target.value.split(/\n/));  
                  }}/>
        <button onClick={() => props.onHarvest(plants)}>HARVEST!</button>
    </div>);
};

export default VegetableInput