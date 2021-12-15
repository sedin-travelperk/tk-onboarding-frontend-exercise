import React from "react";
import RecipeList from "../components/RecipeList";
import useRecipeState from "../hooks/useRecipeState";

let recipes = [
    {
        "id": 1,
        "name": "Pizza",
        "description": "Put it in the oven",
        "ingredients": [{"name": "dough"}, {"name": "cheese"}, {"name": "tomato"}]
    },
    {
        "id": 2,
        "name": "Hamburger",
        "description": "Put it in the grill",
        "ingredients": [{"name": "ground beef"}, {"name": "buns"}, {"name": "tomato"}]
    }
]

const RecipeScreen = () => {
    const {recipeList, addRecipe, removeRecipe} = useRecipeState(recipes)

    return (
        <>
            <RecipeList recipeList={recipeList}/>
        </>
    )
}

export default RecipeScreen