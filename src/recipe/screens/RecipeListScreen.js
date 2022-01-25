import React, {useEffect} from "react";
import RecipeList from "../components/RecipeList";
import useRecipeListState from "../hooks/useRecipeListState";
import RecipeService from "../services/RecipeService";
import AddRecipeModal from "../components/AddRecipeModal";
import SearchRecipes from "../components/SearchRecipes";
import Table from "../../app/components/Table";
import RecipeListItem from "../components/RecipeListItem";
import Row from "../../app/components/Row";

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
            <Row>
                <div>
                   <h1>Recipe List</h1>
                </div>
                <AddRecipeModal addRecipe={addRecipe}/>
            </Row>
            <SearchRecipes updateRecipeList={updateRecipeList}/>
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