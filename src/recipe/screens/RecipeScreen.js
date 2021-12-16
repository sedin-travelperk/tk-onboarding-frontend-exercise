import React from "react";
import { useParams } from 'react-router-dom';

const recipe = {
    "id": 1,
    "name": "Pizza",
    "description": "Put it in the oven",
    "ingredients": [{"name": "dough"}, {"name": "cheese"}, {"name": "tomato"}]
}

const RecipeScreen = () => {
    const params = useParams()

    return (
        <h1>Recipe {params.recipeId}</h1>
    )
}

export default RecipeScreen