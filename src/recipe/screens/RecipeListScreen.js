import React, {useEffect} from "react";
import RecipeList from "../components/RecipeList";
import useRecipeListState from "../hooks/useRecipeListState";
import RecipeService from "../services/RecipeService";

const RecipeListScreen = () => {
    const recipeService = RecipeService()
    const {recipeList, updateRecipeList, addRecipe, removeRecipe} = useRecipeListState([])

    useEffect(async () => {
        const result = await recipeService.find_all_recipes()

        updateRecipeList(result);
    }, []);

    const handleAddRecipe = async (recipe) => {
        const result = await recipeService.create_recipe(recipe);

        addRecipe(result);
    }


    return (
        <>
            <RecipeList
                recipeList={recipeList}
                addRecipe={handleAddRecipe}
                removeRecipe={removeRecipe}
            />
        </>
    )
}

export default RecipeListScreen