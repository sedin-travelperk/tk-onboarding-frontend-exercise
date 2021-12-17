import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import useRecipeState from "../hooks/useRecipeState";
import useFlagState from "../../app/hooks/useFlagState";
import RecipeForm from "../components/RecipeForm";
import Button from "../../app/components/Button";
import {useNavigate} from "react-router";
import RecipeService from "../services/RecipeService";


const RecipeScreen = () => {
    const recipeService = RecipeService()
    const navigate = useNavigate();
    const params = useParams()
    const {recipe, updateRecipe, updateRecipeField, isValid} = useRecipeState({});
    const [validRecipe, setValidRecipe] = useFlagState(false);

    useEffect(async () => {
        console.log(params.recipeId)
        const result = await recipeService.getRecipe(params.recipeId)

        updateRecipe(result)
    }, []);

    useEffect(() => {
        setValidRecipe(isValid())
    }, [recipe]);

    const handleSaveRecipe = () => {
        navigate(`/recipes`);
    }

    const handleDeleteRecipe = () => {
        navigate(`/recipes`);
    }

    return (
        <>
            <RecipeForm
                recipe={recipe}
                updateRecipeField={updateRecipeField}
            />

            <Button onClick={handleSaveRecipe} disabled={validRecipe}>Save</Button>
            <Button onClick={handleDeleteRecipe} >Delete</Button>
        </>
    )
}

export default RecipeScreen