import React from "react";

const RecipeListItem = ({recipe}) => {
    return (
        <>
            <p>{recipe.name}</p>
            <p>{recipe.description}</p>
        </>
    )
}

export default RecipeListItem