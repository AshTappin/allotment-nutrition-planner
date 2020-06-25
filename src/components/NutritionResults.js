import React, {useState} from 'react';

const NutritionResults = (props) => {
    console.dir(props.results);
    return (<div className="nutrients-results-container">
        <div>Calories: {props.results.calories}</div>
        <div>Daily calorie percentage: {props.results.totalDaily.ENERC_KCAL.quantity.toFixed(2)} %</div>
    </div>)
};

export default NutritionResults;