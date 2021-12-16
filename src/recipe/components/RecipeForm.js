import React from 'react'
import Input from "../../app/components/Input";

const RecipeForm = ({recipe, updateRecipeField}) => {

    return (
        <form>
            <Input
                label={"Name"}
                value={recipe.name}
                onChange={event => updateRecipeField(event.target.value, "name")}
            />
            <Input
                label={"Description"}
                value={recipe.description}
                onChange={event => updateRecipeField(event.target.value, "description")}
            />
        </form>
    )
}

export default RecipeForm