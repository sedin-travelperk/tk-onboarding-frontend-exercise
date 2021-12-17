import React, {useEffect} from "react";
import RecipeList from "../components/RecipeList";
import useRecipeListState from "../hooks/useRecipeListState";
import RecipeService from "../services/RecipeService";

const RecipeListScreen = () => {
    const recipeService = RecipeService()
    const {recipeList, updateRecipeList, addRecipe, removeRecipe} = useRecipeListState([])

    useEffect(async () => {
        const result = await recipeService.findAllRecipes()

        updateRecipeList(result);
    }, []);

    const handleAddRecipe = async (recipe) => {
        const result = await recipeService.createRecipe(recipe);

        addRecipe(result);
    }

    const handleRemoveRecipe = async (recipeId) => {
        await recipeService.removeRecipe(recipeId);
        removeRecipe(recipeId);
    }


    return (
        <>
            <RecipeList
                recipeList={recipeList}
                addRecipe={handleAddRecipe}
                removeRecipe={handleRemoveRecipe}
                updateRecipeList={updateRecipeList}
            />
        </>
    )
}

export default RecipeListScreen