import React from 'react';

const VegetableInput = (props) => <div className="input-container"><input type="text" className="plants"/>
    <button onClick={() => props.onHarvest()}>HARVEST!</button>
</div>;

export default VegetableInput