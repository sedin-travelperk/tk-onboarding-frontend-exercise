import React, {useEffect} from "react";
import RecipeList from "../components/RecipeList";
import useRecipeListState from "../hooks/useRecipeListState";
import RecipeService from "../services/RecipeService";

const RecipeListScreen = () => {
    const recipe_service = RecipeService()
    const {recipeList, updateRecipeList, addRecipe, removeRecipe} = useRecipeListState([])

    useEffect(async () => {
        const result = await recipe_service.find_all_recipes()

        updateRecipeList(result);
    }, []);


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

export default RecipeListScreen