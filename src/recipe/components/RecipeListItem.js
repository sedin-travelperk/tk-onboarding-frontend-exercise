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
            <tr key={recipe.id}>
                <td>{recipe.id}</td>
                <td>{recipe.name}</td>
                <td>{recipe.description}</td>
                <td>
                    <Button onClick={() => openRecipeDetails()}>Edit</Button>
                    <Button onClick={() => removeRecipe(recipe.id)}>Delete</Button>
                </td>
            </tr>


    )
}

export default RecipeListItem