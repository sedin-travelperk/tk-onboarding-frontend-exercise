import React from "react";
import Button from "../../app/components/Button";
import {useNavigate} from "react-router";

const RecipeListItem = ({recipe, removeRecipe}) => {
    const navigate = useNavigate();

    const openRecipeDetails = () =>{
        const path = `/recipes/${recipe.id}`;
        navigate(path);
    }

    return (
        <>
            <p>{recipe.name}</p>
            <p>{recipe.description}</p>
            <Button onClick={() => openRecipeDetails()}>Edit</Button>
            <Button onClick={() => removeRecipe(recipe.id)}>Delete</Button>
        </>
    )
}

export default RecipeListItem