import React, {useState} from 'react';
import VegetableInput from "../components/Vegetables";
import Axios from "axios";
import NutritionResults from "../components/NutritionResults";

const VegetableContainerInput = (props) => {
    
    const [nutritionResults, setNutritionResults] = useState(null);
    const getInfo = async (plants) => {
        const response = await Axios.post(`https://api.edamam.com/api/nutrition-details?app_id=e9c86bec&app_key=0d559c9207c35d6df54a5afc845adf4e`, 
            {
                "ingr": plants
            });
        setNutritionResults(response.data);
    };
    return (<div className="container"><VegetableInput onHarvest={getInfo}/>{
        nutritionResults != null && (<NutritionResults results={nutritionResults}/>)}</div>);
};

export default VegetableContainerInput;