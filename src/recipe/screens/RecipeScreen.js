import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import useRecipeState from "../hooks/useRecipeState";
import useFlagState from "../../app/hooks/useFlagState";
import RecipeForm from "../components/RecipeForm";
import Button from "../../app/components/Button";
import {useNavigate} from "react-router";

const test_recipe = {
    "id": 1,
    "name": "Pizza",
    "description": "Put it in the oven",
    "ingredients": [{"name": "dough"}, {"name": "cheese"}, {"name": "tomato"}]
}

const RecipeScreen = () => {
    const navigate = useNavigate();
    const params = useParams()
    const {recipe, updateRecipe, updateRecipeField, isValid} = useRecipeState({});
    const [validRecipe, setValidRecipe] = useFlagState(false);

    const handleSaveRecipe = () => {
        navigate(`/recipes`);
    }

    const handleDeleteRecipe = () => {
        navigate(`/recipes`);
    }

    useEffect(() => {
        console.log(params.recipeId)
        updateRecipe(test_recipe)
    }, []);

    useEffect(() => {
        setValidRecipe(isValid())
    }, [recipe]);

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