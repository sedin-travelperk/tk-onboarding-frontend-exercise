import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import useRecipeState from "../hooks/useRecipeState";
import useFlagState from "../../app/hooks/useFlagState";
import RecipeForm from "../components/RecipeForm";
import Button from "../../app/components/Button";
import {useNavigate} from "react-router";
import RecipeService from "../services/RecipeService";
import IngredientForm from "../components/IngredientForm";
import IngredientList from "../components/IngredientList";


const RecipeScreen = () => {
    const recipeService = RecipeService()
    const navigate = useNavigate();
    const params = useParams()
    const {recipe, updateRecipe, updateRecipeField, isValid, addIngredient, removeIngredient} = useRecipeState({});
    const [validRecipe, setValidRecipe] = useFlagState(false);

    useEffect(async () => {
        const result = await recipeService.getRecipe(params.recipeId)

        updateRecipe(result)

    }, []);

    useEffect(() => {
        setValidRecipe(isValid())
    }, [recipe]);

    const handleSaveRecipe = async () => {
        await recipeService.updateRecipe(recipe);
        navigate(`/recipes`);
    }

    const handleDeleteRecipe = async () => {
        await recipeService.removeRecipe(recipe.id)
        navigate(`/recipes`);
    }

    return (
        <>
            <RecipeForm
                recipe={recipe}
                updateRecipeField={updateRecipeField}
            />
            <IngredientForm addIngredient={addIngredient}/>
            <IngredientList ingredients={recipe.ingredients || []} removeIngredient={removeIngredient}/>
            <Button onClick={handleSaveRecipe} disabled={validRecipe}>Save</Button>
            <Button onClick={handleDeleteRecipe}>Delete</Button>
        </>
    )
}

export default RecipeScreen