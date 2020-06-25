import React, {useState} from 'react';

const NutritionInfo = (props) => (<div className="nutrient-info">
    <div><b>{props.nutritionName}</b>: {props.totalNutrition.quantity.toFixed(2)}{props.totalNutrition.unit}</div>
    <div>Daily percentage: {props.totalDaily.quantity.toFixed(2)} %</div>
</div>);

export default NutritionInfo;