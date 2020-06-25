import React, {useState} from 'react';
import NutritionInfo from "./NutritionInfo";

const NutritionResults = (props) => {
    console.dir(props.results);
    return (<div className="nutrients-results-container">
        <NutritionInfo nutritionName="Calories" totalNutrition={props.results.totalNutrients.ENERC_KCAL} 
                       totalDaily={props.results.totalDaily.ENERC_KCAL}
        />
        <NutritionInfo nutritionName="Carbs" totalNutrition={props.results.totalNutrients.CHOCDF}
                       totalDaily={props.results.totalDaily.CHOCDF}
        />
        <NutritionInfo nutritionName="Protein" totalNutrition={props.results.totalNutrients.PROCNT}
                       totalDaily={props.results.totalDaily.PROCNT}
        />
        <NutritionInfo nutritionName="Calcium" totalNutrition={props.results.totalNutrients.CA}
                       totalDaily={props.results.totalDaily.CA}
        />
        <NutritionInfo nutritionName="Fiber" totalNutrition={props.results.totalNutrients.FIBTG}
                       totalDaily={props.results.totalDaily.FIBTG}
        />
        <NutritionInfo nutritionName="Iron" totalNutrition={props.results.totalNutrients.FE}
                       totalDaily={props.results.totalDaily.FE}
        />
        <NutritionInfo nutritionName="Vitamin C" totalNutrition={props.results.totalNutrients.VITC}
                       totalDaily={props.results.totalDaily.VITC}
        />
        <NutritionInfo nutritionName="Fat" totalNutrition={props.results.totalNutrients.FAT}
                       totalDaily={props.results.totalDaily.FAT}
        />
        <NutritionInfo nutritionName="Saturated Fat" totalNutrition={props.results.totalNutrients.FASAT}
                       totalDaily={props.results.totalDaily.FASAT}
        />
        <NutritionInfo nutritionName="Vitamin A" totalNutrition={props.results.totalNutrients.VITA_RAE}
                       totalDaily={props.results.totalDaily.VITA_RAE}
        />
        <NutritionInfo nutritionName="Vitamin E" totalNutrition={props.results.totalNutrients.TOCPHA}
                       totalDaily={props.results.totalDaily.TOCPHA}
        />
        <NutritionInfo nutritionName="Vitamin K" totalNutrition={props.results.totalNutrients.VITK1}
                       totalDaily={props.results.totalDaily.VITK1}
        />
    </div>)
};

export default NutritionResults;