import React, {useState} from 'react';
import VegetableInput from "../components/Vegetables";
import Axios from "axios";

const VegetableContainerInput = (props) => {
    const getInfo = async (plants) => {
        const response = await Axios.post(`https://api.edamam.com/api/nutrition-details?app_id=e9c86bec&app_key=0d559c9207c35d6df54a5afc845adf4e`, 
            {
                "ingr": plants
            });
        
        console.dir(response.data);
    };
    return (<VegetableInput onHarvest={getInfo}/>);
};

export default VegetableContainerInput;