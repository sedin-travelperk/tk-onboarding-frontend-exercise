import {useState} from "react";

const useRecipeListState = (initialVal) => {
    const [recipeList, setRecipeList] = useState(initialVal || [])

    const updateRecipeList = (value) => {
        setRecipeList(value)
    }

    const addRecipe = (recipe) => {
        setRecipeList([...recipeList, recipe]);
    }

    const removeRecipe = (recipeId) => {
        const updatedRecipeList = recipeList.filter(recipe => recipe.id !== recipeId);
        setRecipeList(updatedRecipeList);
    }

    return {
        recipeList,
        updateRecipeList,
        addRecipe,
        removeRecipe
    }
}

export default useRecipeListState