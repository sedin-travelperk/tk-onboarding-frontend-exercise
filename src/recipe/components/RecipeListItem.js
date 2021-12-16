import React from "react";
import Button from "../../app/components/Button";

const RecipeListItem = ({recipe, removeRecipe}) => {
    return (
        <>
            <p>{recipe.name}</p>
            <p>{recipe.description}</p>
            <Button onClick={() => removeRecipe(recipe.id)}>Delete</Button>
        </>
    )
}

export default RecipeListItem