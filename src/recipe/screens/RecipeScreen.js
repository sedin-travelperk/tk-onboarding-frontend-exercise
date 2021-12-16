import React from "react";
import RecipeList from "../components/RecipeList";
import useRecipeListState from "../hooks/useRecipeListState";

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
    const {recipeList, addRecipe, removeRecipe} = useRecipeListState(recipes)

    return (
        <>
            <RecipeList
                recipeList={recipeList}
                addRecipe={addRecipe}
                removeRecipe={removeRecipe}
            />
        </>
    )
}

export default RecipeScreen