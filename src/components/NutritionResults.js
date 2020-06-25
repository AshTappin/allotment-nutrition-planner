import React, {useState} from 'react';

const NutritionResults = (props) => {
    console.dir(props.results);
    return (<div className="nutrients-results-container">
        <div className="nutrient-info">
            <div>Calories: {props.results.calories}</div>
            <div>Daily percentage: {props.results.totalDaily.ENERC_KCAL.quantity.toFixed(2)} %</div>
        </div>
        <div className="nutrient-info">
            <div>Carbs: {props.results.totalNutrients.CHOCDF.quantity}</div>
            <div>Daily percentage: {props.results.totalDaily.CHOCDF.quantity.toFixed(2)} %</div>
        </div>
        <div className="nutrient-info">
            <div>Protein: {props.results.totalNutrients.PROCNT.quantity}</div>
            <div>Daily percentage: {props.results.totalDaily.PROCNT.quantity.toFixed(2)} %</div>
        </div>
    </div>)
};

export default NutritionResults;